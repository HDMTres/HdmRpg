import chalk from 'chalk';

const runExit=() =>{
  console.clear();
  const afficheExit = `
  ${chalk.blue(`+${"-".repeat(39)}+`)}
  ${chalk.blue('|')} ${chalk.yellow.bold('\t\t  ❌ Exit ❌ ')} ${chalk.blue('\t\t|')}
  ${chalk.blue(`+${"-".repeat(39)}+\n`)}
  Fin du jeu, Au revoir!
  `;
  return afficheExit;
}
export default runExit;