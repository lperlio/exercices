//charAt(); Renvoie le caractère qui se trouve à la position spécifiée.
let uneChaine = 'JavaScripy est génial !';
alert(uneChaine.charAt(4));
// retourne S

//concat() : Combine une ou plusieurs chaînes en une nouvell chaîne.
let laChaine = 'JavaScript est génial !';
alert(laChaine.concat(' Nous aimons JS !'));
// retourne Javascript est génial ! Nous aimons JS !

//indexOf() : Recheche et renvoie la position de la première occurence du carractère recherché, ou d'une sous-chaîne à l'intérieeur de la chaîne.
/*let autreChaine = 'JavaScript est génial !';
alert(autreChaine.indexOf(génial));*/
// retourne 14

//split : Partage une chaine en un tableau de sous-chaînes.
let exChaine = 'JavaScript est génial !';
alert(exChaine.split('l'));
// retourne JavaScript est génia, !

//substring() : Extrait les caractere entre deux positions spécifiées.
let ex1Chaine = 'JavaScript est génial !';
alert(ex1Chaine.substring(2, 7));
// retourne vaScr

//tolowerCase() : Convertit tous les caractères de la chaine en minuscules.
let ex2Chaine = 'MON CHAT TOTOROW !';
alert(ex2Chaine.toLowerCase());
// Retourne mon chat totorow !

// toUpperCase : Convertit tous les carcatères de la chaîne en majusules.
let ex3Chaine = 'mon chat totorow !';
alert(ex3Chaine.toUpperCase());
// Retourne
