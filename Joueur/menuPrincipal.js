import runStart from '../BaseJeu/OptionsGame/startGame.js';
import loadrun from '../BaseJeu/OptionsGame/loadGame.js';
import chalk from 'chalk'; // J'ai importer la module Chalk qui permettra d'ajouter de la couleur au texte
import runWelcome from '../BaseJeu/AffichageMenu/affWelcome.js';
import runExit from '../BaseJeu/AffichageMenu/affExit.js';


export default function runInput(){
const menuPrincipal = async () => {
   runWelcome();
  let validInput = false;
  let inputJoueur;  // J'initialise le Input de l'utilisateur
  
  /*une boucle while pour vérifier que l'entrée Input est valide 
  (un nombre compris entre 1 et 3) en utilisant une variable validInput qui est initialement 
  définie comme fausse.*/

  while (!validInput) {
    process.stdout.write("Your choice (1-3): "); // La méthode process.stdout.write() qui permet d'écrire (sur la console) sans retour à la ligne.
    inputJoueur = await new Promise((resolve) => {
      process.stdin.once("data", (data) => {
        resolve(Number(data.toString().trim()));
      });
    });

    /* Cette partie du code utilise une boucle "while" pour vérifier si l'input utilisateur est valide.
    Si la réponse entrée par l'utilisateur n'est pas comprise entre 1 et 3,
    la boucle affiche un message d'erreur "Option non valide."
    et continue à demander une entrée à l'utilisateur.
    Cela permet de s'assurer que l'utilisateur entre une entrée valide
    avant de continuer avec le jeu. */

    if (inputJoueur >= 1 && inputJoueur <= 3) {
      validInput = true;
    } else {
      console.clear();
      runWelcome();
      console.log(chalk.red(
        "\nI think you have a brain problem, should change it regularly.\NI repeat, no special letter or character but only a number between 1 and 3...."));
    }
  }
  switch(inputJoueur) {
    case 1:
      console.clear(); //Efface la console
      runStart(); // Appelle la fonction run() de startGame.js
      break;
    case 2:
      loadrun(); // Appelle la fonction run() de loadGame.js
      break;
    case 3:
      console.log(runExit());
      process.exit();
      break;
    default:
      console.log(`BIG PROBLEM`);
      break;
  }
}
 /* Explication du boucle : Lorsque l’utilisateur entre 1, la fonction run() de startGame.js est 
 appelée et démarre un nouveau jeu. Lorsque l’utilisateur entre 2, la fonction run() de loadGame.js 
 est appelée et charge un jeu existant. Lorsque l’utilisateur entre 3, un message de fin de jeu est 
 affiché et l’application quitte.*/
 menuPrincipal(); // Appelle la fonction
}
