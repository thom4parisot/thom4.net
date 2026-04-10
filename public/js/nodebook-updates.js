import {nodebookUpdate as render} from './templates.bundle.js';

const get = (url) => {
  return fetch(url)
    .then(response => response.json())
}

document.addEventListener('DOMContentLoaded', (e) => {
  const updatesContainer = document.querySelector('#nodebook-updates');

  if (updatesContainer) {
    get(updatesContainer.dataset.src)
      .then(items => items.map(commit => '<li class="commit">' + render({commit}) + '</li>'))
      .then(items => updatesContainer.innerHTML = items.join(''));
  }
});
