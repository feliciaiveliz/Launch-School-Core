// Reverse Engineer
// remove call to 'event.stopPropagation'

document.querySelector('html').addEventListener('click', () => {
  let container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});
