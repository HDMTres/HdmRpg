
const affichageOptions=()=> {
  const options = [
    "Fight", "Shop",
    "Save Game and Exit", "Exit❌ \n"
  ];

  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  return options;
}
export default affichageOptions;