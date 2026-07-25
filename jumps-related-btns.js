// Sidebar buttons + left-side UI for jumps and spins

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.querySelector(".js-sidebar-buttons-container");
  const leftSide = document.querySelector(".js-left-side");

  // --- Sidebar buttons ---
  sidebarButtons.forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = label;
    btn.classList.add("side-bar-btn");
    sidebarContainer.appendChild(btn);
  });

  // --- Handle Jumps ---
  document.getElementById("jumpBtn").addEventListener("click", () => {
    leftSide.innerHTML = "";
    let html = '<div class="elements-btn">';
    elementButtons.forEach((el, index) => {
      html += `
        <div class="element-group">
          <button class="element" data-index="${index}">${el.label}</button>
          <div class="dropdown" style="display: none; margin-top: 5px;">
            ${rotationButtons[index].map(r => `
              <div class="rotation-group">
                <button class="rotation" data-rotation-id="${r.id}">${r.label}</button>
              </div>`).join("")}
          </div>
        </div>`;
    });
    html += "</div>";
    leftSide.innerHTML = html;
    leftSide.style.display = "block";

    document.querySelectorAll(".element").forEach(btn => {
      btn.addEventListener("click", () => {
        const dropdown = btn.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
      });
    });
  });

  // --- Handle Spin button (basic) ---
  document.getElementById("spinBtn").addEventListener("click", () => {
    leftSide.innerHTML = "";
    let html = '<div class="spins-btn">';
    spinButtons.forEach((sp, index) => {
      html += `
        <div class="spin-group">
          <button class="spin-category">${sp.label}</button>
          <div class="dropdown" style="display: none; margin-top: 5px;">
            ${spinTypeBtns[index].map(r => `
              <div class="spin-type">
                <button class="spin" data-spin-id="${r.id}">${r.label}</button>
              </div>`).join("")}
          </div>
        </div>`;
    });
    html += "</div>";
    leftSide.innerHTML = html;
    leftSide.style.display = "block";

    document.querySelectorAll(".spin-category").forEach(btn => {
      btn.addEventListener("click", () => {
        const dropdown = btn.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
      });
    });
  });

  // --- Handle Choreo Spins button
  document.getElementById("choreoSpBth").addEventListener("click", () => {
    const chSp = choreoSp[0];

    if (chSp) {
      addRow(chSp.name, chSp.points);
    }
  })

  // --- Handle Step Sequens button ---
  document.getElementById("stepSiqBtn").addEventListener("click", () => {
    const stepBase = stepsLevelData[0];

    if (stepBase) {
      addRow(stepBase.name, stepBase.points);
    }
  });

  // --- Handle Choreo Sequence button ---
  document.getElementById("choreoBtn").addEventListener("click", () => {
    const ch = choreo[0];

    if (ch) {
      addRow(ch.name, ch.points);
    }
  });

  // --- Event delegation for jump/spin selection ---
  leftSide.addEventListener("click", (e) => {
    const jumpBtn = e.target.closest("button.rotation");
    const spinBtn = e.target.closest("button.spin");
    // const stepSiqBtn = e.target.closest // I have to target the table row ???????
    if (jumpBtn) {
      const code = jumpBtn.dataset.rotationId;
      const match = jumps.find(j => j.name === code);
      if (match) {
        addRow(match.name, match.points);
      }
    }
    if (spinBtn) {
      const code = spinBtn.dataset.spinId;
      const match = spins.find(s => s.name === code);
      if (match) {
        addRow(match.name, match.points);
      }
    }
  });
});
