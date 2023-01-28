import miseajourStat from "./miseajourStat.js";

const affichageStatJoueur = () => {
    console.log(` 
      HP : ${miseajourStat.HP} 
      Attack : ${miseajourStat.Attack} 
      Armure : ${miseajourStat.Armure} \n`);
  }
  export default affichageStatJoueur;