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
    age: 56,
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

document.body.addEventListener('click', (e) => {
  console.log(e.target.id);

  if (e.target.id === 'javascript') {
    document.body.style.background = 'yellow';
  }
});
