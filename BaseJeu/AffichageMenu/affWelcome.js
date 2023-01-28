import chalk from 'chalk';

const runWelcome =()=> {
    const menuWelcome = console.log( 
  `
  ${chalk.blue.bgGrey(`+${"-".repeat(39)}+`)}
  ${chalk.blue.bgRedBright('|')} ${chalk.yellow.bold('\t\t⭐ Welcome ⭐')} ${chalk.blue.bgRedBright('\t\t|')}
  ${chalk.blue.bgGrey(`+${"-".repeat(39)}+\n`)}
  ${chalk.green('\t1. ✅ Start game ✅')}
  ${chalk.cyan('\t2. ⏩ Load game ⏪')}
  ${chalk.red('\t3. ❌ Exit game ❌')}
  `)
  return menuWelcome;
}
export default runWelcome;