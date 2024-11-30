const axios = require("axios");
const { evaluateChecklist } = require("./evaluateRules");

const API_URL =
  "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

async function fetchAndEvaluateChecklist() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // Evaluate rules
    return evaluateChecklist(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

module.exports = { fetchAndEvaluateChecklist };
