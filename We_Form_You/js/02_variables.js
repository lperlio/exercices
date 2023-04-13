// Déclaration + affectation
let prenom = 'lionel'; //String

let age = 37; //Number

let enligne = true; //Boolean

let choix = null; //Null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enligne);
console.log(typeof choix);

//Concatenation
console.log(prenom + ' ' + age + ' ans');
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

//echapper un carractere antislash
console.log('il fait beau "aujourd\'hui"');

//Declaration et affectation d'une constante
const VILLE = 'Saint-Nazaire';
console.log(VILLE);

//Array
let tab = ['Pommes', 30, true, ['bleu', 'rouge']];
//Grandeur du tableau
console.log(tab.length);
//Index 1
console.log(tab[1]);
//récupérer le mot rouge
console.log(tab[3][1]);

//Object
let personne = {
  prenom: 'Lionel',
  age: 56,
  adresse: {
    rue: '35 rue de la rivière blanche',
    ville: 'PARIS',
  },
};

console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);

let a = 6;
let b = 2;

//Addition
console.log(a + b);
//Soustraction
console.log(a - b);
//Multiplication
console.log(a * b);
//Division
console.log(a / b);
//Modulo
console.log(a % b);

//Incrementer
a += 1; //a++ equivaut à a = a +1
console.log(a);

//Décrementer
b -= 1; //b-- equivaut à b = b -1
console.log(b);
