//Création de la promesse
const promiseGetusers = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (USERS !== `undefined`) {
      resolve(USERS);
    } else {
      reject(`Accès aux users impossible`);
    }
  }, 2000);
});

//Récupérer l'état d ela promesse
promiseGetusers
  .then(function (u) {
    console.log(u);
  })
  .catch(function (e) {
    console.log(e);
  });
