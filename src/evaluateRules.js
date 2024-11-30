const rules = require("./rules");

function evaluateChecklist(data) {
  return rules.map((rule) => ({
    name: rule.name,
    passed: rule.condition(data),
  }));
}

module.exports = { evaluateChecklist };
