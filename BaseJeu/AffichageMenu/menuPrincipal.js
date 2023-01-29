import runStart from '../OptionsGame/startGame.js';
import chalk from 'chalk'; // J'ai importer la module Chalk qui permettra d'ajouter de la couleur au texte
import runWelcome from './affWelcome.js';
import runExit from './affExit.js';
import charge from '../OptionsGame/loadGame.js';



export default function runInput(){
const menuPrincipal = async () => {
   runWelcome();
  let validInput = false;
  let inputJoueur; 

  while (!validInput) {
    process.stdout.write("Your choice (1-3): "); // La méthode process.stdout.write() qui permet d'écrire (sur la console) sans retour à la ligne.
    inputJoueur = await new Promise((resolve) => {
      process.stdin.once("data", (data) => {
        resolve(Number(data.toString().trim()));
      });
    });

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
      console.clear();
      runStart();
      break;
    case 2:
       charge();
       process.exit();
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
 menuPrincipal();
}
