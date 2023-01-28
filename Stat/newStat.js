import miseajourStat, { armureMaj, AttackMaj, hpMaj } from "../Joueur/miseajourStat.js";

const newStat = () => {
    miseajourStat.HP = hpMaj();
    miseajourStat.Attack = AttackMaj();
    miseajourStat.Armure = armureMaj();
    console.log(`
      HP : ${miseajourStat.HP} 
      Attack : ${miseajourStat.Attack} 
      Armure : ${miseajourStat.Armure} \n`);
  }
export default newStat;