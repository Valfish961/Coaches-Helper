const buttons = {
  programDuration: 'Program duration',
  jumps: 'Jumps',
  spins: 'Spins',
  stepSiquence: 'Step Siquence'
}

let buttonsHTML = `
  <button class="basic-main-buttons" data-content="${rulesShortCut.text}">${buttons.programDuration}</button>
  <button class="basic-main-buttons" data-content="${rulesShortCut.text1}">${buttons.jumps}</button>
  <button class="basic-main-buttons" data-content="${rulesShortCut.text2}">${buttons.spins}</button>
  <button class="basic-main-buttons" data-content="${rulesShortCut.text3}">${buttons.stepSiquence}</button>
`;

document.querySelector('.basic-buttons-container').innerHTML = buttonsHTML;

// let rulesShortCutHTML = `
//   <div>${rulesShortCut.text}</div>
//   <div>${rulesShortCut.text1}</div>
//   <div>${rulesShortCut.text2}</div>
//   <div>${rulesShortCut.text3}</div>
// `;

const showContent = (content) => {
  const textElement = document.querySelector('.basic-text-container')
  if (textElement) {
    if (textElement.innerHTML === `<div>${content}</div>`) {
      textElement.innerHTML = '';
    } else {
      textElement.innerHTML = `<div>${content}</div>`;
    }
  }
};

document.querySelectorAll('.basic-main-buttons').forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.getAttribute('data-content');
    showContent(content);
  });
});