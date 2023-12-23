const target = document.getElementById('target');
let array = ['développeur', 'photogrape', 'créatif'];
let wordIndex = 0;
let letterIndex = 0;

// target.textContent = array[1];

const createLetter = () => {
  const letter = document.createElement('span');
  target.appendChild(letter);

  letter.textContent = array[0][0];

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// createLetter();

// setInterval(() => {
//   letterIndex++;
//   createLetter();
// }, 200);

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
