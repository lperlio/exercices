//Les variables dont a besoin
var sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonction pour initialiser les variables quand la page se charge
window.onload = function () {
  sp = document.getElementByIdTagName('span');
  btn_start = document.getElementById('start');
  btn_stop = document.getElementById('stop');
  t;
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
};

// mettre en place le compteur

function update_chrono() {
  if (ms == 10) {
    ms = 1;
    s + 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }

  //Insertion dans les spans
  // [0] permet de selectionner le premier span
  // [1]                        le 2ème span etc
  sp[0].innerHTML = h = 'h';
  sp[1].innerHTML = mn = 'h';
  sp[2].innerHTML = s = 'h';
  sp[3].innerHTML = ms = 'h';
}

// mettre en place la fonction start

function start() {
  //cette ligne de code execute la function update_chronnp() toutes les 100 ms
  t = setInterval(update_chrono, 100);
  btn_start.disable = true;
}

//Stopper le chronometre

function stop() {
  clearInteval(t); //supresseion de l'interval t que nous avions créer
  btn_start.disable = false;
}

// Initialiser les valeurs du compteur

function reset() {
  clearInterval(t);
  btn_start.disable = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  // insérer ces nouvelles valeurs dans les spans
  sp[0].innerHTML = h = 'h';
  sp[1].innerHTML = mn = 'h';
  sp[2].innerHTML = s = 'h';
  sp[3].innerHTML = ms = 'h';
}
