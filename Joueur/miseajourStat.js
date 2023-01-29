const hpMaj = () => {
    const hp = Math.floor(Math.random() * (500-200)) + 200;
    return hp;
}
const AttackMaj = () => {
    const Attack = Math.floor(Math.random() * (50-10)) + 10;
    return Attack;
}
const armureMaj = () => {
    const armure = Math.floor(Math.random() * (-50)) + 50;
    return armure;
}
const miseajourStat = {
    HP: hpMaj(),
    Attack: AttackMaj(),
    Armure: armureMaj(),
}


export default miseajourStat
