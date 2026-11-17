"""Sonda de navegador para la tarea warmth-competence.
Uso: uv run --with playwright python warmth-competence.py <base-url> <out.json>
Hard checks = casos de la tabla "Comprobacion aprobada" del brief.
Soft checks = detectores de brechas de spec encontrados en la revision humana.
"""
import json
import sys

from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8899/Labs/comunicacion/01-warmth-competence/index.html"
OUT = sys.argv[2] if len(sys.argv) > 2 else "/tmp/probe-results.json"
RESULTS = {"checks": [], "spec_gaps": [], "page_errors": [], "http_errors": []}


def check(name, value):
    RESULTS["checks"].append({"name": name, "pass": bool(value)})
    assert value, name


def gap(name, detector, found):
    RESULTS["spec_gaps"].append({"name": name, "detector": detector, "found": bool(found)})


def observe(page):
    page.on("pageerror", lambda e: RESULTS["page_errors"].append(str(e)))
    page.on("response", lambda r: RESULTS["http_errors"].append(
        {"url": r.url, "status": r.status}) if r.status >= 400 else None)


def summ(page):
    return page.locator("#fig-summary").inner_text().lower()


with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome", headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    observe(page)
    page.goto(BASE)

    # Detector: .sub no debe exponer lenguaje de objetivo ("Explicar...", "nombrar...")
    sub = page.locator(".sub").inner_text().lower()
    gap("sub-exposes-spec-language", "sub-goal-language",
        any(v in sub for v in ("explicar", "nombrar", "reconocer", "aplicar la")))

    check("exploration hidden before prediction", page.locator("#exploration").is_hidden())
    page.locator("#reveal").click()
    check("empty prediction keeps exploration hidden and focuses",
          page.locator("#exploration").is_hidden() and
          page.evaluate("document.activeElement.id") == "prediction")
    page.locator("#prediction").fill("Creo que envidia y que bajo presion empeora.")
    page.locator("#reveal").click()
    check("prediction reveals exploration", page.locator("#exploration").is_visible())

    check("initial summary describes envy + passive",
          "envidia" in summ(page) and "pasiva" in summ(page))
    check("canvas mounted", page.locator("#fig canvas").count() == 1)

    page.get_by_role("button", name="Mentora del equipo", exact=True).click()
    check("preset moves to admiration",
          "admiraci" in summ(page) and "activa" in summ(page))
    page.get_by_role("button", name="Consultora externa", exact=True).click()
    check("preset returns to envy", "envidia" in summ(page))

    warm = page.locator(".f-slider", has_text="Calidez percibida").locator("input")
    comp = page.locator(".f-slider", has_text="Competencia percibida").locator("input")
    warm.fill("9"); comp.fill("8")
    check("sliders reach admiration", "admiraci" in summ(page))
    warm.fill("2"); comp.fill("2")
    check("sliders reach contempt", "desprecio" in summ(page))

    page.get_by_role("button", name="Consultora externa", exact=True).click()
    # Detector: toggle de condicion debe exponer aria-pressed inicial
    gap("pressure-toggle-missing-initial-aria-pressed", "toggle-initial-aria-pressed",
        page.get_by_role("button", name="Bajo presion del sistema", exact=True)
        .get_attribute("aria-pressed") is None)
    page.get_by_role("button", name="Bajo presion del sistema", exact=True).click()
    check("pressure flips envy conduct",
          "activo" in summ(page) and "chivo expiatorio" in summ(page))
    check("pressure button aria-pressed true",
          page.get_by_role("button", name="Bajo presion del sistema", exact=True)
          .get_attribute("aria-pressed") == "true")
    page.get_by_role("button", name="Mentora del equipo", exact=True).click()
    # Detector: brief exige que el texto diga que otros cuadrantes son estables
    gap("non-envy-quadrants-dont-state-stability", "stable-quadrant-note",
        "estable" not in summ(page))
    page.get_by_role("button", name="Condiciones estables", exact=True).click()

    qs = page.locator(".q")
    qs.nth(0).locator(".opts button").nth(1).click()
    qs.nth(1).locator(".opts button").nth(1).click()
    rec = page.evaluate("LearningState.getLesson('comunicacion','01-warmth-competence')")
    check("quiz records attempt in qualified namespace",
          rec["completed"] and rec["attempts"] == 1 and rec["lastCorrect"] == 2)
    check("visit recorded", page.evaluate(
        "LearningState.getLesson('comunicacion','01-warmth-competence').lastVisited !== null"))

    check("connections use comunicacion topic",
          "topic=comunicacion" in page.locator("#connect a").first.get_attribute("href"))
    check("library mounted", page.get_by_role("heading",
          name="Tus materiales de esta area").is_visible())
    check("notebook link safe", page.locator("a[href*='notebook.google.com']")
          .first.get_attribute("rel") == "noopener noreferrer")

    # Detector: colision de etiquetas en canvas a viewport movil
    for w in (390, 320):
        page.set_viewport_size({"width": w, "height": 900})
        check(f"no overflow at {w}px",
              page.evaluate("document.documentElement.scrollWidth <= innerWidth"))
        if w == 390:
            coll = page.evaluate("""() => {
              const c = document.querySelector('#fig canvas');
              const cw = c.clientWidth;
              const m = document.createElement('canvas').getContext('2d');
              m.font = "700 12px 'Space Grotesk', sans-serif";
              const qw = m.measureText('Lástima paternalista').width;
              m.font = "700 11px 'Space Grotesk', sans-serif";
              const aw = m.measureText('Calidez percibida').width;
              const midX = cw / 2;
              const qx1 = midX * 0.5 + qw / 2;
              const ax1 = 16 + aw;
              const qx0 = midX * 0.5 - qw / 2;
              return Math.min(qx1, ax1) - Math.max(qx0, 16);
            }""")
            gap("canvas-label-collision-at-390-320", "canvas-label-collision", coll > 0)
            RESULTS.setdefault("collision_px", round(coll, 1))

    ctx.close()

    ctx2 = browser.new_context(viewport={"width": 1280, "height": 900},
                               color_scheme="dark", reduced_motion="reduce")
    p2 = ctx2.new_page()
    observe(p2)
    p2.goto(BASE)
    p2.locator("#prediction").fill("x")
    p2.locator("#reveal").click()
    check("reduced motion still mounts figure",
          p2.locator("#fig canvas").count() == 1 and "envidia" in summ(p2))
    p2.locator("[data-theme-toggle]").click()
    p2.reload()
    check("theme persists", p2.evaluate(
        "document.documentElement.dataset.theme") == "light")
    ctx2.close()

    ctx3 = browser.new_context(java_script_enabled=False)
    p3 = ctx3.new_page()
    observe(p3)
    p3.goto(BASE)
    check("no-JS shows initial case and explanations",
          "Cuadrante de envidia" in p3.locator("body").inner_text() and
          p3.locator(".why").first.is_visible())
    gap("noscript-missing-quadrant-table", "noscript-quadrant-table",
        p3.locator("noscript ul").count() == 0)
    ctx3.close()

    check("zero page errors", not RESULTS["page_errors"])
    check("zero failed resources", not RESULTS["http_errors"])
    browser.close()

with open(OUT, "w", encoding="utf-8") as fh:
    json.dump(RESULTS, fh, ensure_ascii=False, indent=2)
print(json.dumps(RESULTS, ensure_ascii=False, indent=2))
