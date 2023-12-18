// alert('Salut JS');

let coucou = 'Hello';

// console.log(coucou);

var unTexte = 'Voici un texte';

const prenom = 'Lionel';

let unChiffre = 56;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine = 'Chaine précédente : ' + chaine;

let autreConcatenation = `'Chaine précédente : ' ${chaine}`;

let string = 'Je suis un caractère';
let number = 24;
let boolean = true;
let array = ['je', 'suis', 47, true];
let object = {
  prenom: 'Anne',
  age: 33,
  ville: 'Nantes',
};

let total = 0;

total--;
total += 5;

let x = 2;
let y = 12;

// if (x > y) {
//   alert('YES x plus gros que y');
// } else {
//   alert('Y est plus grand !');
// }

// if (x < y || x > 6) {
//   console.log('Oui !');
// }

function faireQuelqueChose() {
  console.log('Je fais un truc');
  console.log(5 + 6);
  alert('Calcul terminé !');
}

const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);

function add2() {
  let a = 4;
  return a + 2;
}
