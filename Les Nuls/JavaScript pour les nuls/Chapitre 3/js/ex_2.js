let movie = 'Le Parrain';

function showGoodMovie() {
  alert(movie + ' est un bon film !');
}
function showBadMovie() {
  movie = 'Speed 2: Cruise Control';
  alert(movie + ' est un mauvais film !');
}

showGoodMovie(); // affiche "Le Parrain est un bon film !"
showBadMovie(); // affiche "Speed 2: Cruise Control est un mauvais film"
// Oh non ! La variable globale est maintenant Speed 2 : Cuise Control, donc plus le nomm du bon film !
showGoodMovie(); // affiche "Speed 2: Cruise Control est un bon film !"
