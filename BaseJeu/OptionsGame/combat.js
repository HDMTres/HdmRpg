import miseajourStat from "../../Joueur/miseajourStat.js";
import chalk from 'chalk';

const monsterTypes = ["Tank", "Sorcier"];
const selectedType = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];

let statMonstre = {};

if (selectedType === "Tank") {
  statMonstre = {
    Type: selectedType,
    ForceTank: Math.floor(Math.random() * (50 - 10)) + 10, //(Max - min) + min
    Hp: Math.floor(Math.random() * (350 - 200)) + 200,
  };
} else {
  statMonstre = {
    Type: selectedType,
    Intelligence: Math.floor(Math.random() * (30 - 10)) + 10,
    Hp: Math.floor(Math.random() * (250 - 150)) + 150,
  };
}
const runCombat = async() =>{


  console.log(chalk.yellow(`\t-----Preparer vous au combat---\n\n Stat du Monstre:\n`) +
    chalk.red(`\n\tMonster: ${statMonstre.Type}`) +
    (selectedType === "Tank" ? chalk.red(`\n\tHp: ${statMonstre.Hp}`) +
    chalk.red(`\n\tForce: ${statMonstre.ForceTank}\n`) : 
    chalk.red(`\n\tHp: ${statMonstre.Hp}`) +
    chalk.red(`\n\tIntelligence: ${statMonstre.Intelligence}\n`)));
  
    while (statMonstre.Hp > 0 && miseajourStat.HP > 0) {
      
      for (let round = 1; statMonstre.Hp > 0 && miseajourStat.HP > 0; round++) {
        const bonusAttack = Math.floor(Math.random() * (35 - 5)) + 5;
        const reduireIntelligence = Math.floor(Math.random() * (20 - 0)) + 0;
        if (selectedType === "Tank") {
          miseajourStat.HP -= statMonstre.ForceTank + bonusAttack;
          statMonstre.Hp -= miseajourStat.Attack + bonusAttack;
        } else {
          let resultat = 0;
          miseajourStat.HP -= statMonstre.Intelligence + bonusAttack;
          statMonstre.Hp -= (miseajourStat.Attack + bonusAttack ) - reduireIntelligence; //L'intelligence permet de reduire les degats du joueur
        }

        console.log(` 
        ${chalk.yellow(`+${"-".repeat(16)}+`)}
        ${chalk.yellow('|')} Round : ${round}⭐ ${chalk.yellow('\t|')}
        ${chalk.yellow(`+${"-".repeat(16)}+\n`)}
        `);

        if (selectedType === "Tank") {
        console.log(`Le monstre "${statMonstre.Type}" vous a infligé ${statMonstre.ForceTank + bonusAttack} de dégats...\nVous lui avez infligé ${miseajourStat.Attack + bonusAttack} de dégats...\n`);
      }else {
        console.log(`Le monstre "${statMonstre.Type}" vous a infligé ${statMonstre.Intelligence + bonusAttack} de dégats...\nVous avez infligé ${miseajourStat.Attack + bonusAttack} de dégats...\n Le Monstre a réduit le degat de ${reduireIntelligence}`);
      };

        console.log(chalk.greenBright(`\nPlayer Hp: ${miseajourStat.HP}`) + chalk.redBright(`\tMonster Hp:${statMonstre.Hp}\n`) + chalk.red(`${" -".repeat(15)}\n`)); // on utilise HpSorcier ici
        /* await new Promise((resolve) => setTimeout(resolve, 1000));*/ //Cela ne marche pas....
      }
      

      if (statMonstre.Hp <= 0) { 
      statMonstre.Hp = 0; 
        console.log(`Monster "${statMonstre.Type}" Hp is => ${statMonstre.Hp}\nYou have defeated the monster ${statMonstre.Type} !`);
      } else if (miseajourStat.HP <= 0) {
        miseajourStat.HP = 0;
        console.log(`Nooo, you have been defeated by the ${statMonstre.Type}\nMonster "${statMonstre.Type}" Hp is => ${statMonstre.Hp}`);
      }
      
    return statMonstre;
  }
} 
export default runCombat;
  
