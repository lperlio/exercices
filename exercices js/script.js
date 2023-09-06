// // // const motApplication = 'Bonjour';
// // // let motUtilisateur = prompt('Entrez le mot : ' + motApplication);

// // // if (motUtilisateur === motApplication) {
// // //   console.log('Bravo');
// // // } else {
// // //   console.log('Erreur de frappe');
// // // }

// // // // let motTapeOk = false;

// // // // if (motTapeOk) {
// // // //   console.log('Bravo vous avez bien tapé le mot');
// // // // } else {
// // // //   console.log('Echec vous avez mal tapé le mot');
// // // // }

// // // switch (motUtilisateur) {
// // //   case motApplication:
// // //     console.log('Bravo');
// // //     break;
// // //   case 'Gredin':
// // //     console.log('Restez correct !');
// // //     break;
// // //   case 'Mécréant':
// // //     console.log('Restez correct !');
// // //     break;
// // //   case 'Vilain':
// // //     console.log('Restez correct !');
// // //     break;
// // //   default:
// // //     console.log('Vous avez fait une erreur de frappe');
// // // }

// // const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
// // let score = 0;

// // let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0]);

// // if (motUtilisateur === listeMots[0]) {
// //   score++;
// // }

// // motUtilisateur = prompt('Entrez le mot : ' + listeMots[1]);

// // if (motUtilisateur === listeMots[1]) {
// //   score++;
// // }

// // motUtilisateur = prompt('Entrez le mot : ' + listeMots[2]);

// // if (motUtilisateur === listeMots[2]) {
// //   score++;
// // }

// // console.log(score);

// for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
//   console.log(compteur);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 13) {
//   console.log(i);
//   i++;
// }

// let mot = prompt('Ecrivez ok');

// while (mot !== 'ok') {
//   mot = prompt('Ecrivez ok');
// }
// console.log('Vous avez écrit ok !');

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
// const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
// let score = 0;

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
// let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0]);

// // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
// if (motUtilisateur === listeMots[0]) {
//   score++;
// }

// // Idem avec le second mot du tableau
// // Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[1]);
// if (motUtilisateur === listeMots[1]) {
//   score++;
// }

// // Idem avec le troisième mot du tableau
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[2]);
// if (motUtilisateur === listeMots[2]) {
//   score++;
// }

// // Affichage du score de l'utilisateur
// console.log('Votre score est de ' + score + ' sur 3');

const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ["Pas de panique", "La vie, l'univers et le reste", "Merci pour le poisson" ]

let score = 0;

let choix = prompt("Veuillez choisir la liste : mots ou phrases")
while(choix !=== "mots" && choix !== "prhases") {
  choix = prompt("Veuillez choisir la liste : mots ou phrases")
}

for (let i = 0; i < listeMots.length; i++) {
  let motUtilsateur = prompt('Entrez le mot ' + listeMots[i]);
  if (motUtilsateur === listeMots[i]) score++;
}

console.log('Votre score est de ' + score + ' sur ' + listeMots.length);
