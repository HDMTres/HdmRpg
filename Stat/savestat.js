import { writeFile } from "node:fs"
import miseajourStat from "../Joueur/miseajourStat.js"

const savestat = () => {
  const data = JSON.stringify(miseajourStat)
  writeFile("savestat.json", data, (err) => {
    if (err) {
      throw err
    }
  })
}
export default savestat();
