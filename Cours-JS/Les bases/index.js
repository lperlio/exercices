// alert("Salut LP");

// console.log("coucou");

//Kamel case
let maSuperVariable = "Hello";

// Les variables

var unTexte = "Voici un texte";

// const =constante

const prenom = "justine";

// Let = la variable peut évoluer

let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une chaine de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + "Voilà c'était le contenu";

//Concaténation avec guillement altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voilà c'était le contenu`;

// Types de données

let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;
// Tableau : il ya des crochets []
let array = ["je", "suis", 47, true];
// l'Objet c'est des accolades
let object = {
  prenom: "Lionel",
  age: 33,
  ville: "Eaubonne",
};

let arbre;

arbre = "sapin";

// les opérateurs

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 ** 5);

// Opérateurs d'affectation

let total = 0;

total++;
total += 5;
total -= 2;
total *= 2;

console.log(total);

// Structure ce contrôle

let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y > x) {
//   alert("y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

// On teste si la varible est true
// if (x) {
//   console.log("x existe !");
// }

// test l'égalité en type et valeur
if (x === y) {
  //   console.log("ils sont égaux");
} else {
  //   console.log("pas égaux !");
}

// == teste l'égalité de valeur sans prendre en compte le type
let a = 2;
let b = "2";

if (a == b) {
  console.log("ils sont égaux");
} else {
  console.log("pas égaux !");
}

// || ou
// && et

// || soit l'un soit l'autre
if (x < y || x > 1) {
  //   console.log("UI");
}

// && il faut que toutes les conditions soient réunies
if (x < y && x > 1) {
  console.log("UI");
}

// Les fonctions classique
function faireQuelqueChose() {
  console.log("Je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

// Il faut impérativement appelé la function pour qu'elle s"execute
faireQuelqueChose();

// fonctions flêchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(432, 578481);

// La portée des variables

let num = 4;
function add2() {
  console.log(num + 2);
}

console.log(num);
