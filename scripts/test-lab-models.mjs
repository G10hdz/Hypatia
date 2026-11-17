import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const { bayes, capacity } = runInNewContext(
  readFileSync(new URL("../shared/lab-models.js", import.meta.url), "utf8") + "\nLabModels;"
);
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9);

const taxi = bayes({ prior: 0.15, sensitivity: 0.8, specificity: 0.8 });
near(taxi.truePositive, 1200);
near(taxi.falsePositive, 1700);
near(taxi.posterior, 12 / 29);

const medical = bayes({ prior: 0.01, sensitivity: 0.95, specificity: 0.95 });
near(medical.truePositive, 95);
near(medical.falsePositive, 495);
near(medical.posterior, 95 / 590);
near(medical.truePositive + medical.falseNegative
  + medical.falsePositive + medical.trueNegative, 10000);
assert.equal(bayes({ prior: 0, sensitivity: 1, specificity: 1 }).posterior, null);
assert.equal(bayes({ prior: 1, sensitivity: 1, specificity: 1 }).posterior, 1);
assert.throws(() => bayes({ prior: NaN, sensitivity: 0.8, specificity: 0.8 }), { name: "RangeError" });
assert.throws(() => bayes({ prior: 0.1, sensitivity: 1.1, specificity: 0.8 }), { name: "RangeError" });

const noCache = capacity({ rps: 800, webServers: 2 });
assert.equal(noCache.effectiveCapacity, 700);
assert.equal(noCache.bottleneck, "db");
near(noCache.rejectedRate, 0.125);
const cached = capacity({ rps: 800, webServers: 2, cacheHitRate: 0.65 });
assert.equal(cached.effectiveCapacity, 800);
assert.equal(cached.bottleneck, "app");
assert.equal(cached.rejected, 0);
near(cached.dbRps, 280);
assert.equal(capacity({ rps: 800, webServers: 1, cacheHitRate: 0.65 }).served, 400);
assert.equal(capacity({ rps: 800, webServers: 0, cacheHitRate: 0.65 }).rejectedRate, 1);
assert.equal(capacity({ rps: 0, webServers: 0 }).rejectedRate, 0);
assert.equal(capacity({ rps: 1000, webServers: 2, cacheHitRate: 1 }).served, 800);
assert.throws(() => capacity({ rps: -1, webServers: 1 }), { name: "RangeError" });
assert.throws(() => capacity({ rps: 1, webServers: 0.5 }), { name: "RangeError" });
assert.throws(() => capacity({ rps: 1, webServers: 1, cacheHitRate: 2 }), { name: "RangeError" });

console.log("Lab models: Bayes frequencies, undefined posterior, cache bounds and node failures verified.");
