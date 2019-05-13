import styles from './index.css';
const root = document.getElementById('root');

const list = document.createElement('ul');
list.className = styles.dogs;
const dogs = ['spot', 'bingo', 'rover', 'joe'];

dogs.forEach(dog => {
  const html = /*html*/ `<li>${dog}</li>`;
  const template = document.createElement('template');
  template.innerHTML = html;
  list.appendChild(template.content);
});

root.appendChild(list);

