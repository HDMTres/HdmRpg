
import affichageStatJoueur from '../../Joueur/affStatJoueur.js';
import saveStat from '../../Stat/savestat.js';
import newStat from '../../Stat/newStat.js';
import affichageOptions from '../AffichageMenu/affOptionsStartG.js';
import runCombat from './combat.js';

const runStart = async () => {

  affichageStatJoueur();
  affichageOptions();

  let choixUtilisateur;
  let sasieValide = false;

  while (!sasieValide) {
    process.stdout.write("Your choice (1-5): ");
    choixUtilisateur = await new Promise((resolve) => {
      process.stdin.once("data", (data) => {
        resolve(Number(data.toString().trim())); //Type Number
      });
    });

    switch(choixUtilisateur) {
      case 1:
        console.clear();
        runCombat();
        process.exit();
      case 2:
        console.clear();
        console.log("Le Shop est en cours de développement et est donc momentanément indisponible...\n");
        affichageOptions();
        break;
      case 3:
        console.clear();
        console.log("Nouvelles statistiques :");
        newStat();
        affichageOptions();
        break;
      case 4:
        console.clear();
        // Code pour sauvegarder les données du personnage
        saveStat();
        console.log("Thanks you for playing ! (Stat saved)");
        process.exit();
        break;
      case 5:
        console.clear();
        console.log("Thank you for playing !");
        process.exit();
        break;
      default:
        console.clear();
        affichageStatJoueur();
        affichageOptions();
        console.log("Non valide.Les options disponible vont de 1 à 5.");
        break;
    }
  }
}
export default runStart;
