/* Expected frequencies and capacity bounds, not fitted real-world predictions. */
const LabModels = (() => {
  function probability(value, name) {
    if (!Number.isFinite(value) || value < 0 || value > 1) {
      throw new RangeError(`${name} must be between 0 and 1`);
    }
    return value;
  }

  function bayes({ prior, sensitivity, specificity, population = 10000 }) {
    probability(prior, "prior");
    probability(sensitivity, "sensitivity");
    probability(specificity, "specificity");
    if (!Number.isFinite(population) || population <= 0) {
      throw new RangeError("population must be positive");
    }
    const truePositive = population * prior * sensitivity;
    const falseNegative = population * prior * (1 - sensitivity);
    const falsePositive = population * (1 - prior) * (1 - specificity);
    const trueNegative = population * (1 - prior) * specificity;
    const positive = truePositive + falsePositive;
    return {
      truePositive, falseNegative, falsePositive, trueNegative, positive,
      posterior: positive === 0 ? null : truePositive / positive,
    };
  }

  function capacity({ rps, webServers, cacheHitRate = 0 }) {
    if (!Number.isFinite(rps) || rps < 0) {
      throw new RangeError("rps must be nonnegative");
    }
    if (!Number.isInteger(webServers) || webServers < 0 || webServers > 2) {
      throw new RangeError("webServers must be 0, 1 or 2");
    }
    probability(cacheHitRate, "cacheHitRate");
    const webCapacity = webServers * 400;
    const missRate = 1 - cacheHitRate;
    // Cache is downstream of the app servers: every request still uses an app.
    const dbCapacity = missRate === 0 ? Infinity : 700 / missRate;
    const effectiveCapacity = Math.min(webCapacity, dbCapacity);
    const served = Math.min(rps, effectiveCapacity);
    const rejected = rps - served;
    return {
      webCapacity, dbCapacity, effectiveCapacity, served, rejected,
      rejectedRate: rps === 0 ? 0 : rejected / rps,
      dbRps: served * missRate,
      bottleneck: webCapacity <= dbCapacity ? "app" : "db",
    };
  }

  return Object.freeze({ bayes, capacity });
})();

if (typeof module !== "undefined" && module.exports) module.exports = LabModels;
