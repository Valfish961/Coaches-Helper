// Store all buttons as an Object
const headerButtons = {
  basicNovice: 'Basic Novice',
  intermediaNovice: 'Intermedia Novice',
  advanceNovice: 'Advance Novice',
  junior: 'Junior',
  senior: 'Senior',
  planningPage: 'Planning Page'
  // calculation: 'Calculation'
};

//Define URLs for each button
const buttonLinks = {
  basicNovice: 'basic-novice.html',
  intermediaNovice: 'intermedia-novice.html',
  advanceNovice: 'advance-novice.html',
  junior: 'junior.html',
  senior: 'senior.html',
  planningPage: 'planning-page.html'
  // calculation: 'calculation.html'
}

// Put all buttons at HTML variable
// Place all buttons at header and make them inteructive
let headerButtonsHTML = `
    <div class="header js-header">
      <button class="category-button" onclick="
        openInNewTab('${buttonLinks.basicNovice}')"
      >${headerButtons.basicNovice}</button>
      <button class="category-button" onclick="
        openInNewTab('${buttonLinks.intermediaNovice}')">${headerButtons.intermediaNovice}</button>
      <button class="category-button" onclick="
        openInNewTab('${buttonLinks.advanceNovice}')">${headerButtons.advanceNovice}</button>
      <button class="category-button" onclick="
        openInNewTab('${buttonLinks.junior}')">${headerButtons.junior}</button>
      <button class="category-button" onclick="
        openInNewTab('${buttonLinks.senior}')">${headerButtons.senior}</button>
      <button class="next-pages-button" onclick="
        openInNewTab('${buttonLinks.planningPage}')">${headerButtons.planningPage}</button>
      
    </div>
  `;
  // <button class="next-pages-button" onclick="
       // openInNewTab('${buttonLinks.calculation}')">${headerButtons.calculation}</button>

// Place all buttons on the page
document.querySelector('.js-header')
  .innerHTML = headerButtonsHTML;

// Function to open URL in a new page
function openInNewTab(url) {
  window.open(url, '_blank');
};

