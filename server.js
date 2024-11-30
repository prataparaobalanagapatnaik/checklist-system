const express = require("express");
const path = require("path");
const { fetchAndEvaluateChecklist } = require("./src/fetchData");

const app = express();
const PORT = 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// API to get checklist evaluation
app.get("/results", async (req, res) => {
  try {
    const results = await fetchAndEvaluateChecklist();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Error fetching checklist results" });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
