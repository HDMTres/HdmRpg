const monsterTypes = ["Tank", "Sorcier"];
export const selectedType = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
export let statMonstre = {};
if (selectedType === "Tank") {
  statMonstre = {
    Type: selectedType,
    ForceTank: Math.floor(Math.random() * (50 - 10)) + 10,
    Hp: Math.floor(Math.random() * (450 - 200)) + 200,
  };
} else {
  statMonstre = {
    Type: selectedType,
    Intelligence: Math.floor(Math.random() * (30 - 10)) + 10,
    Hp: Math.floor(Math.random() * (250 - 150)) + 150,
  };
}
