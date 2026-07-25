
// Script for short program buttons (girls)
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically generate buttons
  //const spGirlsButtonsHTML = Object.keys(advanceNoviceRules.sp)
    const spGirlsButtonsHTML = Object.keys(spSeniorRules.girls)
    .map(key => `<button class="main-buttons" data-rule-key="${key}">${key.replace(/([A-Z])/g, ' $1')}</button>`)
    .join('');

  function spButtonsLoadingGirls() {
    const containerGirls = document.querySelector('.js-sp-main-buttons-girls');
    if (!containerGirls) return;

    containerGirls.innerHTML = containerGirls.innerHTML === spGirlsButtonsHTML ? '' : spGirlsButtonsHTML;

    // Add event listeners to dynamically created buttons
    if (containerGirls.innerHTML) {
      const buttons = containerGirls.querySelectorAll('.main-buttons');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleKey = e.target.getAttribute('data-rule-key');
          toggleRuleContent(ruleKey);
        });
      });
    }
  }

  function toggleRuleContent(ruleKey) {
    const rulesContainerGirls = document.querySelector('.js-short-cut-rules-girls');
    if (!rulesContainerGirls) return;

    // Toggle content: clear if the current content matches the selected rule
    const ruleValue = spSeniorRules.girls[ruleKey];
    if (rulesContainerGirls.innerHTML === ruleValue) {
      rulesContainerGirls.innerHTML = '';
    } else {
      rulesContainerGirls.innerHTML = ruleValue || 'No information available';
    }
  }

  document.querySelector('.js-sp-buttons-girls').addEventListener('click', spButtonsLoadingGirls);
});

// Script for short program buttons (boys)
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically generate buttons
  const spBoysButtonsHTML = Object.keys(advanceNoviceRules.sp)
    .map(key => `<button class="main-buttons" data-rule-key="${key}">${key.replace(/([A-Z])/g, ' $1')}</button>`)
    .join('');

  function spButtonsLoadingBoys() {
    const containerBoys = document.querySelector('.js-sp-main-buttons-boys');
    if (!containerBoys) return;

    containerBoys.innerHTML = containerBoys.innerHTML === spBoysButtonsHTML ? '' : spBoysButtonsHTML;

    // Add event listeners to dynamically created buttons
    if (containerBoys.innerHTML) {
      const buttons = containerBoys.querySelectorAll('.main-buttons');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleKey = e.target.getAttribute('data-rule-key');
          toggleRuleContent(ruleKey);
        });
      });
    }
  }

  function toggleRuleContent(ruleKey) {
    const rulesContainerBoys = document.querySelector('.js-short-cut-rules-boys');
    if (!rulesContainerBoys) return;

    // Toggle content: clear if the current content matches the selected rule
    const ruleValue = spSeniorRules.boys[ruleKey];
    if (rulesContainerBoys.innerHTML === ruleValue) {
      rulesContainerBoys.innerHTML = '';
    } else {
      rulesContainerBoys.innerHTML = ruleValue || 'No information available';
    }
  }

  document.querySelector('.js-sp-buttons-boys').addEventListener('click', spButtonsLoadingBoys);
});


// Script for the Free Program Girls ***Trying to solve the problem with 5 buttons
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically generate buttons
  const fpGirlsButtonsHTML = Object.keys(fpSeniorRules.girls)
    .map(key => `<button class="main-buttons" data-rule-key="${key}">${key.replace(/([A-Z])/g, ' $1')}</button>`)
    .join('');
  
  function fpButtonsLoadingGirls() {
    const fpContainerGirls = document.querySelector('.js-fp-main-buttons-girls');
    if (!fpContainerGirls) return;
  
    fpContainerGirls.innerHTML = fpContainerGirls.innerHTML === fpGirlsButtonsHTML ? '' : fpGirlsButtonsHTML;

    // Add event listeners to dynamically created buttons
    if (fpContainerGirls.innerHTML) {
      const buttons = fpContainerGirls.querySelectorAll('.main-buttons');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleKey = e.target.getAttribute('data-rule-key');
          toggleRuleContent(ruleKey);
        });
      });
    }
  }

  function toggleRuleContent(ruleKey) {
    const fpRulesContainerGirls = document.querySelector('.js-fp-shortcut-rules-girls');
    if (!fpRulesContainerGirls) return;

    // Toggle content: clear if the current content matches the selected rule
    const ruleValue = fpSeniorRules.girls[ruleKey];
    if (fpRulesContainerGirls.innerHTML === ruleValue) {
      fpRulesContainerGirls.innerHTML = '';
    } else {
      fpRulesContainerGirls.innerHTML = ruleValue;
    }
  }

  document.querySelector('.js-fp-buttons-girls').addEventListener('click', fpButtonsLoadingGirls);
});


// Script for the Free Program Boys
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically generate buttons
  const fpBoysButtonsHTML = Object.keys(fpSeniorRules.boys)
    .map(key => `<button class="main-buttons" data-rule-key="${key}">${key.replace(/([A-Z])/g, ' $1')}</button>`)
    .join('');
  
  function fpButtonsLoadingBoys() {
    const fpContainerBoys = document.querySelector('.js-fp-main-buttons-boys');
    if (!fpContainerBoys) return;
  
    fpContainerBoys.innerHTML = fpContainerBoys.innerHTML === fpBoysButtonsHTML ? '' : fpBoysButtonsHTML;

    // Add event listeners to dynamically created buttons
    if (fpContainerBoys.innerHTML) {
      const buttons = fpContainerBoys.querySelectorAll('.main-buttons');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleKey = e.target.getAttribute('data-rule-key');
          toggleRuleContent(ruleKey);
        });
      });
    }
  }

  function toggleRuleContent(ruleKey) {
    const fpRulesContainerBoys = document.querySelector('.js-fp-shortcut-rules-boys');
    if (!fpRulesContainerBoys) return;

    // Toggle content: clear if the current content matches the selected rule
    const ruleValue = fpSeniorRules.boys[ruleKey];
    if (fpRulesContainerBoys.innerHTML === ruleValue) {
      fpRulesContainerBoys.innerHTML = '';
    } else {
      fpRulesContainerBoys.innerHTML = ruleValue || 'No information available';
    }
  }

  document.querySelector('.js-fp-buttons-boys').addEventListener('click', fpButtonsLoadingBoys);
});

