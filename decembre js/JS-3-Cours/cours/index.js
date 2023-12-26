// Rappel des types de données
let string = 'Chaine';
let number = 25;
let boolean = true;
let maVariable; // produit undefined

// tableaux
let array = ['Bordeaux', 'Toulouse', 'Nantes'];
// console.log(array[2][4]);

let array2 = ['Bordeaux', 24, true, [1, 2], { nom: 'Denis' }];
// console.log(array2[4].nom);

let objet = {
  pseudo: 'Denis',
  age: 33,
  technos: ['Javascript', 'React', 'NodeJs'],
  admin: false,
};

// objet.adresse = '22 rue du code';
// console.log(objet);
// console.log(objet.technos[0][1]);

let data = [
  {
    pseudo: 'Clhoé',
    age: 26,
    technos: ['Twiter', 'Facebook', 'Insta'],
    admin: false,
  },
  {
    pseudo: 'Lionel',
    age: 57,
    technos: ['Javascript', 'React', 'NodeJs'],
    admin: false,
  },
  {
    pseudo: 'Françoise',
    age: 58,
    technos: ['Tissus', 'Couture', 'Mode'],
    admin: true,
  },
];

// console.log(data[2].age + ' ans');

//----------------------------------------------------------
// Les structures de controle

// if (data[0].age > data[1].age) {
//   //   console.log(data[0].pseudo + ' est plus agée que ' + data[1].pseudo);
// } else {
//   //   console.log(data[0].pseudo + ' Est moins agée que ' + data[1].pseudo);
// }

// //while
// let w = 0;

// while (w < 10) {
//   w++;
//   //   console.log('La valeur de w est de : ' + w);
// }

// //Do while
// let d = 0;

// do {
//   d++;
//   //   console.log(d);
// } while (d < 5);

// // Les boucles for
// for (const user of data) {
//   //   document.body.innerHTML += `<li>${user.pseudo} ${user.age} ans</li>`;
// }

// // On déclare la valeur de i | jusqu'ou on boucle | on incrémente i si la condition 2 n'est pas remplie
// for (i = 0; i < data.length; i++) {
//   //   console.log(data[i].technos[0]);
// //   document.body.innerHTML +=
// //     '<h2>' + data[i].pseudo + ' ' + data[i].technos.join('/') + '</h2>';
// // }

// Switch
document.body.addEventListener('click', (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case 'javasript':
      document.body.style.background = 'yellow';
      break;
    case 'php':
      document.body.style.background = 'violet';
      break;
    case 'python':
      document.body.style.background = 'blue';
      break;
    default:
      null;
  }
});

// Méthodes String
// let string2 = 'Javascript est un langage orienté objet';

// // console.log(string2.indexOf('x')); // retourne -1 s'il ne le connait pas

// // let newString = string2.slice(3);

// // console.log(newString);

// // console.log(string2.split(' '));

// // console.log(string2.toLowerCase());

// // console.log(string2.toUpperCase());

// console.log(string2.replace('Javascript', 'TOTOROW'));

//------------------------------------------------------------------------------------

// Métodes Numbers

let number2 = 42.1234;
let numberString = '42.12 est un chiffre';

// console.log(number2.toFixed(2));
// console.log(parseInt('43'));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// console.log(Math.PI);
// console.log(Math.round(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 50)); // ne dépaasera jamais 50

//---------------------------------------------------------------------------------

// Méthodes Arrays

let array3 = ['Javascript', 'Php', 'CSS'];
let array4 = ['Ruby', 'Solidity'];

// let newArray = array3.concat(array4); // Concane les tableaux
// // console.log(newArray);

// // let newArray = [...array3, ...array4]; // fusionne les tableaux
// // console.log(newArray);

// // console.log(array3.join('--')); // Mets des tirets de séparation

// console.log(array3.slice(1));
// console.log(newArray.slice(2, 5));

// console.log(array3.indexOf('CSS'));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === 'S'));
// console.log(array3.some((language) => language === 'Php'));

// let shift = array3.shift();// enleve le premier élément du tableau
// console.log(shift);

// console.log(array3.pop());// affiche le dernière élément du tableau

// const restArray = array3.splice(1, 1, 'C++');// remplace Php par C++
// console.log(array3);

//IMPORTANT//
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // additionne les chiffres
arrayNumber.push(14); // Rajoute 14 au tableau
// console.log(arrayNumber);

//FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10));// ne donne que les chiffres supérieurs à 10
// console.log(arrayNumber.sort()); //classe dans l'ordre du premier index
// console.log(arrayNumber.sort((a, b) => b - a)); //classe du plus grand au plus petit

// arrayNumber.map((number) => console.log(number));
// arrayNumber.map((number) => (document.body.innerHTML += `<li> ${number}</li>`));
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join('');

//METHODE OBJECTS//

document.body.innerHTML = data
  .filter((user) => user.admin === false)
  .filter((user) => user.pseudo.includes('o'))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
<div class="user-card">
<h2>${user.pseudo}</h2>
<p>Age : ${user.age} ans</p>
<p>Status : ${user.admin ? 'Modérateur' : 'Membre'}</p>
</div>
`
  )
  .join('');
