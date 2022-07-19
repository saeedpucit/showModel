'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
const openModel = document.querySelectorAll('.show-modal');

function showModel() {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function hideModel() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModel.addEventListener('click', hideModel);
overlay.addEventListener('click', hideModel);

for (let i = 0; i < openModel.length; i++) {
  openModel[i].addEventListener('click', showModel);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    hideModel();
  }
});
