const buttons = {
  programDuration: 'Program duration',
  jumps: 'Jumps',
  spins: 'Spins',
  stepSiquence: 'Step Siquence'
}

let buttonsHTML = `
  <button class="main-buttons" data-content="${rulesShortCut.text4}">${buttons.programDuration}</button>
  <button class="main-buttons" data-content="${rulesShortCut.text5}">${buttons.jumps}</button>
  <button class="main-buttons" data-content="${rulesShortCut.text6}">${buttons.spins}</button>
  <button class="main-buttons" data-content="${rulesShortCut.text3}">${buttons.stepSiquence}</button>
`;

document.querySelector('.buttons-container').innerHTML = buttonsHTML;

const showContent = (content) => {
  const textElement = document.querySelector('.text-container')
  if (textElement) {
    if (textElement.innerHTML === `<div>${content}</div>`) {
      textElement.innerHTML = '';
    } else {
      textElement.innerHTML = `<div>${content}</div>`;
    }
  }
};

document.querySelectorAll('.main-buttons').forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.getAttribute('data-content');
    showContent(content);
  });
});