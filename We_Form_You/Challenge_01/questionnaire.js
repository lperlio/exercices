const questions = [
  {
    question:
      'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
    reponse: 2,
  },
  {
    question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
    reponse: 1,
  },
  {
    question:
      'Quel organe est perturbé par les acouphènes ?\n1. les Pieds\n2. Les Oreilles',
    reponse: 2,
  },
];

// ***************Debut du jeu*******/
let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i += 1) {
  let repUser = prompt(questions[i].question);
  if (repUser == questions[i].reponse) {
    alert('Bonne Reponse');
    nbBonneReponse += 1;
  } else {
    alert('Mauvaise Reponse');
  }
}

if (nbBonneReponse <= 1) {
  alert(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`);
} else {
  alert(`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);
}
