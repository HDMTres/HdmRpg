import miseajourStat from "../Joueur/miseajourStat.js";
import fs from 'fs/promises';



const saveStat = async () => {
    const stats = {
    HP: miseajourStat.HP,
    Attack: miseajourStat.Attack,
    Armure: miseajourStat.Armure
    };
    try {
      fs.writeFile('save.json', JSON.stringify(stats));
      console.log('Sauvegarde effectuée !');
    } catch (err) {
      console.error(err);
    }
}
export default saveStat;

