//Condition if
/*let age = prompt('saisit votre âge');

if (age < 18) {
  alert('Vous êtes un mineur');
} else if (age >= 70) {
  alert('Vous êtes un senior');
} else {
  alert('Vous êtes un majeur');
}*/

//Condition SWITCH

let vehicule = prompt(
  'Quel vehicule souhaitez vous ? Peugeot, BMW, Ferrari'
).toLowerCase();

console.log(vehicule);

let km = prompt('Combien de KM souhaitez vous faire ?');

const prix = {
  peugeot: 0.4,
  bmw: 0.6,
  ferrari: 0.8,
};

switch (vehicule) {
  case 'peugeot': {
    alert('Vous payerez : ' + prix.peugeot * km + ' €');
    break;
  }
  case 'bmw': {
    alert('Vous payerez : ' + prix.bmw * km + ' €');
    break;
  }
  case 'ferrari': {
    alert('Vous payerez : ' + prix.ferrari * km + ' €');
    break;
  }
  default:
    alert('veuillez choisir un véhicule proposé');
}
