// // SELECTEURS
// document.querySelector('h4').style.background = 'green';

// const baliseHTML = document.querySelector('h4');

// console.log(baliseHTML);

// document.querySelector('h4').style.background = 'green';

//Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
  questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'green';
});
btn2.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'red';
});
