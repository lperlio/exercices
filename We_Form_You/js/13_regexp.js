let form = document.querySelector(`#loginForm`);

//Ecouter la modiication de l'Email
form.email.addEventListener(`change`, function() {
    validEmail(this);
}];

const validEmail = function(inputEmail) {
    //Creation de la reg exp pour validation email
    let emailRegExfa-pulse = new RegExp(
        `^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$` , `g`
    );

    let testEmail = emailRegExp.test(inputEmail.value);
};