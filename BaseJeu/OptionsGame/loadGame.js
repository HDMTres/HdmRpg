import miseajourStat from "../../Joueur/miseajourStat.js";
import fs from 'fs/promises';

const load = async () => {
    try {
        const data = await fs.readFile('save.json');
        const stats = JSON.parse(data);
        miseajourStat.HP = stats.HP;
        miseajourStat.Attack = stats.Attack;
        miseajourStat.Armure = stats.Armure;
        console.log('Chargement effectué !');
    } catch (err) {
        console.log("Aucune sauvegarde trouvée.");
        process.exit();
    }
}

const loadrun = async () => {
    console.clear();
    await load();
}
export default loadrun;
