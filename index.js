// Import stylesheets
import './style.css';

const list = document.querySelectorAll('.list>div');
const searchInput = document.querySelector('input[type=text]');

searchInput.addEventListener('keyup', () => {
  let search = searchInput.value.toLowerCase();

  for (let el of list) {
    let item = el.querySelector('.contact').innerHTML.toLowerCase();

    if (item.indexOf(search) == -1) {
      el.classList.remove('show-animation');
      el.classList.add('hide-animation');
      setTimeout(() => {
        el.classList.add('hide');
      }, 500);
    } else {
      el.classList.remove('hide-animation');
      if (el.classList.contains('hide')) {
        el.classList.add('show-animation');
        setTimeout(() => el.classList.remove('hide'), 500);
      }
    }
  }
});
