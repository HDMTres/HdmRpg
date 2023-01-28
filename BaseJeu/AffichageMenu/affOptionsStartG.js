
const affichageOptions=()=> {
  const options = [
    "Fight", "Shop", "New Stat",
    "Save Game", "Exit ❌ \n"
  ];

  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  return options;
}
export default affichageOptions;