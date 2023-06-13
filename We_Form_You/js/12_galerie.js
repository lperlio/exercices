const images = document.querySelectorAll(`#galery img`);
let imgActive = 0;
images[imgActive].classList.add(`show`);

//Masquer les photos sauf la première
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add(`hidden`);
}

// Clic sur bouton suivant
document.querySelector(`#next`).addEventListener(`click`, function () {
  next();
});

//Fonction pour photo suivante
const next = function () {
  images[imgActive].classList.remove(`show`);
  images[imgActive].classList.add(`hidden`);
  imgActive += 1;
  if (imgActive > images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove(`hidden`);
  setTimeaout(() => {
    images[imgActive].classList.add(`show`);
  }, 300);
};

// Clic sur bouton precedent
document.querySelector(`#prev`).addEventListener(`click`, function () {
  prev();
});

//Fonction pour photo precedente
const prev = function () {
  images[imgActive].classList.remove(`show`);
  images[imgActive].classList.add(`hidden`);
  imgActive -= 1;
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  images[imgActive].classList.remove(`hidden`);
  setTimeaout(() => {
    images[imgActive].classList.add(`show`);
  }, 300);
};

//Variable globale pour stocker l'interval de temps
let interval;

// Clic sur bouton play
document.querySelector(`#play`).addEventListener(`click`, function () {
  //création de l'interval de temps
  interval = setInterval(next, 2000);
});

// Clic sur bouton pause
document.querySelector(`#pause`).addEventListener(`click`, function () {
  clearInterval(interval); //destruction de l'interval de temps
});


//gestion touches du clavier
window.addEventListener(`keydown`, function(e)) {
  if (e.key == `ArrowRight`) {
    next();
  }
  if (e.key == `ArrowLeft`) {
    prev();
  }
}