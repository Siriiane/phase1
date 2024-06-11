// var noteNegative = 0;
// var noteReca1 = 10;
// var noteRecu = 12;
// var noteBien = 20;
// var moyenne = window.prompt("veuillez saisir votre moyenne");
// moyenne = parseInt(moyenne);

// var valeurSaisie1 = "string";
// var valeursaisie2 = 45;
// console.log(
//   "Si le type d'une variable est le string de la fontion 'isNaN' retourne 'true' : " +
//     isNaN(valeurSaisie1)
// );
// console.log(
//   "si le type d'une variable est nimber la fontion 'isNaN' retourne 'false' : " +
//     isNaN(valeurSaisie2)
// );

// if (moyenne < 10) {
//   alert("vous êtes recalé");
// } else if (moyenne >= 10 && moyenne < 12) {
//   document.write("Vous êtes reçu !");
// } else if (moyenne > 12);
// // isNaN (is not a number) est une fonction qui prend un parametre (parametre est un element entre parenthese) elle analyse ce paramettre et elle retourne unBoolean apres ces analyse si le type de parametre est une chaine de caractere isNuN retourne True. si c'est une valeur numerique il retourne false
var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 = nb1 + nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
