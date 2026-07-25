// Table, totals, GOE logic, highlighting

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".right-side");

  // --- Title ---
  const h2 = document.createElement("h2");
  h2.textContent = "Calculation and Total Result";
  container.appendChild(h2);

  // --- Levels ---
  const levelsTitle = document.createElement("h3");
  levelsTitle.textContent = "Levels";
  container.appendChild(levelsTitle);

  const levelsDiv = document.createElement("div");
  levels.forEach(level => {
    const button = document.createElement("button");
    button.className = "level";
    button.textContent = level;
    levelsDiv.appendChild(button);
  });
  container.appendChild(levelsDiv);

  // --- Show spins for selected level (this is adding new) ---
  levelsDiv.addEventListener("click", (e) => {
    const levelBtn = e.target.closest(".level");
    if (!levelBtn) return;

    // No row selected -> do nothing
    if (!selectedRow) {
      alert("Please select a row first!");
      return;
    }

    const selectedLevel = levelBtn.textContent.trim();
    const currentName = selectedRow.dataset.elementName;
    const baseName = currentName.replace(/(\d|[A-Z])$/, "");
    const newName = `${baseName}${selectedLevel}`;

    const match = 
      spinsLevelData.find(spin => spin.name === newName) ||
      stepsLevelData.find(step => step.name === newName);

    if (match) {
      selectedRow.dataset.elementName = match.name;
      selectedRow.dataset.basePoints = match.points;

      selectedRow.cells[0].textContent = match.name;
      selectedRow.cells[1].textContent = match.points.toFixed(2);

      updateTotal();
    } else {
      alert (`No matching spin found for ${newName}`);
    }
  });

  // --- Show Step Sequence for selected level ----
 

  // --- GOE ---
  const goeTitle = document.createElement("h3");
  goeTitle.textContent = "GOE";
  container.appendChild(goeTitle);

  const goeDiv = document.createElement("div");
  goeValues.forEach(goe => {
    const button = document.createElement("button");
    button.className = "goe";
    button.textContent = goe;
    goeDiv.appendChild(button);
  });
  container.appendChild(goeDiv);

  // --- Table setup ---
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Selected Element", "Points", "Action"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const tfoot = document.createElement("tfoot");
  const totalRow = document.createElement("tr");
  const totalLabel = document.createElement("td");
  totalLabel.textContent = "Total";
  const totalPointCell = document.createElement("td");
  totalPointCell.textContent = "0.00";
  totalPointCell.colSpan = 2;
  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalPointCell);
  tfoot.appendChild(totalRow);
  table.appendChild(tfoot);

  container.appendChild(table);

  // --- Shared state ---
  let selectedRow = null;

  // --- Highlight rows ---
  tbody.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;
    tbody.querySelectorAll("tr").forEach(r => r.classList.remove("highlight"));
    row.classList.add("highlight");
    selectedRow = row;
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!tbody.contains(event.target)) {
      tbody.querySelectorAll("tr").forEach(r => r.classList.remove("highlight"));
      selectedRow = null;
    }
  });

  // --- Update total ---
  function updateTotal() {
    let total = 0;
    tbody.querySelectorAll("tr").forEach(row => {
      const points = parseFloat(row.cells[1].textContent);
      if (!isNaN(points)) total += points;
    });
    totalPointCell.textContent = total.toFixed(2);
  }

  // --- Add row ---
  window.addRow = function(name, points) {
    const row = document.createElement("tr");
    row.dataset.basePoints = points;
    row.dataset.elementName = name;

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const pointCell = document.createElement("td");
    pointCell.textContent = points.toFixed(2);
    row.appendChild(pointCell);

    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      row.remove();
      updateTotal();
    });
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    tbody.appendChild(row);
    updateTotal();
    return row;
  };

  // --- Apply GOE ---
  goeDiv.addEventListener("click", (e) => {
    const btn = e.target.closest("button.goe");
    if (!btn || !selectedRow) return;
    const goeNum = btn.textContent.trim();
    const basePoints = parseFloat(selectedRow.dataset.basePoints);
    const percentage = goePercentages[goeNum] ?? 0;
    const newPoints = basePoints * (1 + percentage);
    selectedRow.cells[1].textContent = newPoints.toFixed(2);
    updateTotal();
  });
});
