fetch("/results")
  .then((response) => response.json())
  .then((data) => {
    const table = document.getElementById("results-table");
    data.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.passed ? "✅ Passed" : "❌ Failed"}</td>
      `;
      table.appendChild(row);
    });
  })
  .catch((error) => console.error("Error fetching results:", error));
