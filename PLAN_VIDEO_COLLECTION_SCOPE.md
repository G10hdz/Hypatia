# Video Collection & Study Guide Alignment Plan

**Date:** 2026-04-14  
**Goal:** Restructure study guide to use official UNAM tags while keeping current implementation as fallback, then get student guide working end-to-end.

---

## Current State

### Structure in video_refs.js
```js
window.VIDEO_REFS = {
  "algebra": [5 videos],
  "aritmetica": [5 videos],
  "geometria_analitica": [5 videos],
  "trigonometria": [5 videos],
  // Physics (custom names)
  "cinematica": [5 videos],
  "energia": [5 videos],
  "leyes_newton": [5 videos],
  "fisica_general": [5 videos],
  // Chemistry (custom names)
  "estructura_atomica": [5 videos],
  "tabla_periodica": [5 videos],
  "enlaces": [5 videos],
  "reacciones": [5 videos],
  "estequiometria": [5 videos],
  "quimica_general": [5 videos]
}
// Total: 18 topics × 5 videos = 90 videos
```

### Official UNAM Classification (Not yet implemented)

**Mathematics (8 topics — need mapping)**
- algebra
- aritmetica
- geometria_analitica
- trigonometria
- precalculo / logaritmos / exponenciales
- funciones / derivadas / integrales
- geometria (euclidiana)
- estadistica / probabilidad

**Física (9 official tags)**
1. `fis_cinematica` — kinematics ✓ (have 5 videos)
2. `fis_dinamica` — dynamics / forces (NOT YET)
3. `fis_energia` — energy ✓ (have 5 videos as "energia")
4. `fis_termo` — thermodynamics (NOT YET)
5. `fis_fluidos` — fluids (NOT YET)
6. `fis_ondas` — waves (NOT YET)
7. `fis_electro` — electromagnetism (NOT YET)
8. `fis_optica` — optics (NOT YET)
9. `fis_contemporanea` — modern physics / quantum (NOT YET)

**Química (8 official tags)**
1. `qui_basicos` — basic concepts (NOT YET)
2. `qui_atomo` — atomic structure ✓ (have 5 videos as "estructura_atomica")
3. `qui_tabla` — periodic table ✓ (have 5 videos as "tabla_periodica")
4. `qui_enlaces` — bonding ✓ (have 5 videos as "enlaces")
5. `qui_nomenclatura` — nomenclature (NOT YET)
6. `qui_reacciones` — reactions ✓ (have 5 videos as "reacciones")
7. `qui_soluciones` — solutions (NOT YET)
8. `qui_organica` — organic chemistry (NOT YET)

---

## Work Chunks

### Chunk 1: Tag Mapping & Fallback Strategy
**Objective:** Create a mapping table and strategy for backward compatibility

**Files to Create:**
- `TAG_MAPPING.json` — Maps custom tags → official UNAM tags + status

**Structure:**
```json
{
  "math": {
    "algebra": { "official": "mat_algebra", "videos": 5, "status": "ready" },
    "aritmetica": { "official": "mat_aritmetica", "videos": 5, "status": "ready" },
    "geometria_analitica": { "official": "mat_geometria_analitica", "videos": 5, "status": "ready" },
    "trigonometria": { "official": "mat_trigonometria", "videos": 5, "status": "ready" },
    "precalculo": { "official": "mat_precalculo", "videos": 0, "status": "need_videos" }
  },
  "fisica": {
    "cinematica": { "official": "fis_cinematica", "videos": 5, "status": "ready" },
    "dinamica": { "official": "fis_dinamica", "videos": 0, "status": "need_videos" },
    ...
  },
  "quimica": { ... }
}
```

**Fallback Strategy:**
```js
// In video_refs.js, structure will support BOTH:
window.VIDEO_REFS = {
  // NEW: Official tags
  "fis_cinematica": [...],
  "fis_dinamica": [...],
  // OLD: Custom tags (deprecated but kept for compatibility)
  "_legacy_": {
    "cinematica": [...],  // Maps to fis_cinematica
    "energia": [...]      // Maps to fis_energia
  }
}

// Loader function in study-guide.html:
function getVideos(topic) {
  // Try official tag first
  if (window.VIDEO_REFS[topic]) return window.VIDEO_REFS[topic];
  // Fall back to legacy
  if (window.VIDEO_REFS._legacy_[topic]) return window.VIDEO_REFS._legacy_[topic];
  return [];
}
```

**Tasks:**
- [ ] Create TAG_MAPPING.json with all mappings
- [ ] Document fallback strategy in code comments
- [ ] Update study-guide.html to use getVideos() loader function

---

### Chunk 2: Physics Video Gap Analysis & Collection (4 missing topics)
**Objective:** Find 5+ videos each for: dinamica, termo, fluidos, ondas, electro, optica, contemporanea

**Topics Needing Videos (7 total, prioritized by exam weight):**

| Tag | Topic | Priority | Videos Needed | Channels |
|-----|-------|----------|---------------|----------|
| fis_dinamica | Dynamics/Forces | HIGH | 5+ | FisicaconJuan, MatematicasprofeAlex, DanielCarreon |
| fis_termo | Thermodynamics | HIGH | 5+ | FisicaconJuan, Amoeba Ducha |
| fis_ondas | Waves | MEDIUM | 5+ | FisicaconJuan, Amoeba Ducha |
| fis_electro | Electromagnetism | HIGH | 5+ | FisicaconJuan, Amoeba Ducha |
| fis_optica | Optics | MEDIUM | 5+ | FisicaconJuan, Amoeba Ducha |
| fis_fluidos | Fluids | MEDIUM | 5+ | FisicaconJuan, Amoeba Ducha |
| fis_contemporanea | Modern Physics | LOW | 3+ | Amoeba Ducha, MatematicasprofeAlex |

**Search Strategy:**
- For each topic, search: "[Topic] UNAM preparatoria" + "[Topic] preuniversitario"
- Verify: Check comments, view count (1k+), release date (recent), like ratio

**Tasks:**
- [ ] Find 5 videos for `fis_dinamica`
- [ ] Find 5 videos for `fis_termo`
- [ ] Find 5 videos for `fis_ondas`
- [ ] Find 5 videos for `fis_electro`
- [ ] Find 5 videos for `fis_optica`
- [ ] Find 5 videos for `fis_fluidos`
- [ ] Find 3 videos for `fis_contemporanea`

**Deliverable:** `physics_videos_NEW.js` with all 7 topics

---

### Chunk 3: Chemistry Video Gap Analysis & Collection (4 missing topics)
**Objective:** Find 5+ videos each for: basicos, nomenclatura, soluciones, organica

**Topics Needing Videos (4 total):**

| Tag | Topic | Priority | Videos Needed | Channels |
|-----|-------|----------|---------------|----------|
| qui_basicos | Basic Concepts | HIGH | 5+ | QuímicaConJuan, Amoeba Ducha, GreenDot Química |
| qui_nomenclatura | Nomenclature | MEDIUM | 5+ | QuímicaConJuan, GreenDot Química |
| qui_soluciones | Solutions & Concentration | MEDIUM | 5+ | QuímicaConJuan, Amoeba Ducha |
| qui_organica | Organic Chemistry | LOW | 3+ | QuímicaConJuan, Amoeba Ducha |

**Search Strategy:**
- For each topic, search: "[Topic] UNAM" + "[Topic] preuniversitario" + "[Topic] química"
- Verify: 1k+ views, high engagement, recent videos

**Tasks:**
- [ ] Find 5 videos for `qui_basicos`
- [ ] Find 5 videos for `qui_nomenclatura`
- [ ] Find 5 videos for `qui_soluciones`
- [ ] Find 3 videos for `qui_organica`

**Deliverable:** `chemistry_videos_NEW.js` with all 4 topics

---

### Chunk 4: Mathematics Full Coverage (8 topics)
**Objective:** Ensure all 8 math topics have 5 videos each using official tags

**Current Status:**
- ✓ algebra (5 videos)
- ✓ aritmetica (5 videos)
- ✓ geometria_analitica (5 videos)
- ✓ trigonometria (5 videos)
- ✗ precalculo (0 videos)
- ✗ funciones_calculo (0 videos)
- ✗ geometria (euclidiana) (0 videos)
- ✗ estadistica_probabilidad (0 videos)

**Tasks:**
- [ ] Find 5 videos for `mat_precalculo` (exponentials, logarithms)
- [ ] Find 5 videos for `mat_funciones_calculo` (functions, derivatives, limits)
- [ ] Find 5 videos for `mat_geometria` (euclidean geometry, proofs)
- [ ] Find 5 videos for `mat_estadistica_probabilidad` (statistics, probability)

**Deliverable:** `math_videos_COMPLETE.js` with all 8 official math topics

---

### Chunk 5: Merge & Restructure video_refs.js
**Objective:** Merge all new videos into a single video_refs.js with official tags + fallback legacy support

**Input Files:**
- Current: `video_refs.js` (existing 4 math + 4 physics + 6 chemistry)
- New: `physics_videos_NEW.js`, `chemistry_videos_NEW.js`, `math_videos_COMPLETE.js`

**Output Structure:**
```js
window.VIDEO_REFS = {
  // MATH (8 official tags)
  "mat_algebra": [...],
  "mat_aritmetica": [...],
  // ... (8 total)
  
  // PHYSICS (9 official tags)
  "fis_cinematica": [...],
  "fis_dinamica": [...],
  // ... (9 total)
  
  // CHEMISTRY (8 official tags)
  "qui_basicos": [...],
  "qui_atomo": [...],
  // ... (8 total)
  
  // LEGACY FALLBACK (for compatibility)
  "_legacy_": {
    "algebra": "→ mat_algebra",
    "cinematica": "→ fis_cinematica",
    // ... (for older code that uses custom tags)
  }
}
```

**Tasks:**
- [ ] Merge all 3 video files into one structured object
- [ ] Add legacy fallback section
- [ ] Verify all 25 topics have content
- [ ] Validate URLs (spot-check 10 random URLs)

**Deliverable:** Updated `video_refs.js` with 25 topics (8 math + 9 physics + 8 chemistry)

---

### Chunk 6: Update Study Guide HTML & Get Working
**Objective:** Make study-guide.html load and display videos with new tag structure

**Current study-guide.html:**
- Loads `video_refs.js` and `enhanced_explanations.js`
- Needs: Video loader function, topic selector, UI for displaying videos

**Tasks:**
- [ ] Create `getVideos(topic)` function that:
  - Tries official tag first
  - Falls back to legacy tag
  - Returns empty array if not found
- [ ] Create topic selector UI (dropdown or grid)
- [ ] Create video display grid (title, channel, play button)
- [ ] Test with all 25 topics
- [ ] Verify videos play and load correctly
- [ ] Add topic filtering by subject (Math / Physics / Chemistry)

**Deliverable:** Working study-guide.html that displays all video topics

---

### Chunk 7: Update AI Explanation Pipeline
**Objective:** Align enhanced_explanations.js and refresh_explanations.py to official tags

**Files to Update:**
- `enhanced_explanations.js` — Update keys to official tags
- `refresh_explanations.py` — Update TOPICS list to match official tags
- `study-guide.html` — Update to load explanations by official tag

**Tasks:**
- [ ] Map current explanations to official tags
- [ ] Update enhanced_explanations.js structure
- [ ] Update refresh_explanations.py TOPICS list
- [ ] Test that study guide loads both videos + explanations for each topic

**Deliverable:** Aligned explanation system with official tags

---

### Chunk 8: Validation & Final Commit
**Objective:** Verify everything works, then commit to private repo

**Pre-commit Checklist:**
- [ ] All 25 topics have videos (5+ each minimum)
- [ ] All 25 topics have explanations
- [ ] study-guide.html displays all topics correctly
- [ ] Video URLs are live and valid (spot-check 15)
- [ ] Legacy fallback works for old tag names
- [ ] No console errors when loading page
- [ ] Dark mode styling applied correctly
- [ ] Responsive on mobile (test on iPad simulation)

**Commit:**
```bash
git add .
git commit -m "feat: restructure videos to official UNAM tags (25 topics)

- Reorganize video_refs.js with 9 Física + 8 Química + 8 Matemáticas
- Add official tag support (fis_*, qui_*, mat_*) with legacy fallback
- Add 18 new videos for missing Physics/Chemistry topics
- Update enhanced_explanations.js to map to official tags
- Get study-guide.html working with full video + explanation system
- All 25 topics ready for student use"
```

**Tasks:**
- [ ] Run full validation checklist
- [ ] Commit to private repo
- [ ] Push to origin/private
- [ ] Verify commit appears on GitHub

---

## Timeline & Dependencies

**Parallel Work (can do simultaneously):**
- Chunk 1: Tag mapping (foundation)
- Chunk 2: Physics videos (independent)
- Chunk 3: Chemistry videos (independent)
- Chunk 4: Math videos (independent)

**Sequential Work (must follow order):**
1. Chunk 1 → Chunks 2, 3, 4 (in parallel)
2. Chunks 2, 3, 4 → Chunk 5 (merge)
3. Chunk 5 → Chunk 6 (update HTML)
4. Chunk 6 → Chunk 7 (update AI pipeline)
5. Chunk 7 → Chunk 8 (validation & commit)

**Estimated Time:**
- Chunk 1: 30 min
- Chunks 2–4: 2–3 hours each (video research)
- Chunk 5: 45 min
- Chunk 6: 1 hour
- Chunk 7: 30 min
- Chunk 8: 15 min

**Total:** ~8–10 hours

---

## File Structure After Completion

```
CubPrep/
├── video_refs.js                 # UPDATED: 25 topics with official tags + legacy fallback
├── enhanced_explanations.js      # UPDATED: Mapped to official tags
├── study-guide.html              # UPDATED: Works with new tag structure
├── TAG_MAPPING.json              # NEW: Reference mapping (custom → official)
├── physics_videos_NEW.js         # NEW: Intermediate (merged into video_refs.js)
├── chemistry_videos_NEW.js       # NEW: Intermediate (merged into video_refs.js)
├── math_videos_COMPLETE.js       # NEW: Intermediate (merged into video_refs.js)
└── questions.js                  # No change needed
```

---

## Success Criteria

✅ **When complete, the system will:**
1. Support 25 topics (8 math + 9 physics + 8 chemistry)
2. Have 5+ videos per topic (125+ total videos)
3. Have AI explanations for each topic
4. Display study guide with videos + explanations working end-to-end
5. Support both official tags and legacy custom tags (no breaking changes)
6. Be committed to private repo with clear messaging
