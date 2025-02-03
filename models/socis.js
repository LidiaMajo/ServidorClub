import { configBD } from "./gestio.js"
import { SOCIS } from "../lib/constants/socis.js"
import { DB } from "../lib/constants/db.js"
import mysql from "mysql2/promise"
//estableixo connexio
const connexio = await mysql.createConnection(configBD);
export class Model_Socis {
    //afegir soci
    static async afegir(dades) {
        try {
            console.log(dades)
            //preparo les dades a insertar
            const dadesInsert = [dades[SOCIS.nom], dades[SOCIS.cog1], dades[SOCIS.cog2], dades[SOCIS.dni], dades[SOCIS.sexe], dades[SOCIS.dNaixement], dades[SOCIS.adreca], dades[SOCIS.cp], dades[SOCIS.poblacio], dades[SOCIS.telefon], dades[SOCIS.email]];
            //preparo la consulta
            const insertST = `insert into ${DB.taules.socis} (${DB.socis.nom},${DB.socis.cog1},${DB.socis.cog2},${DB.socis.dni},${DB.socis.sexe},${DB.socis.dNaixement},${DB.socis.adreca},${DB.socis.cp},${DB.socis.poblacio},${DB.socis.telefon},${DB.socis.email}) values(?,?,?,?,?,?,?,?,?,?,?)`
            //faig la consulta
            const resultat = await connexio.execute(insertST, dadesInsert);//desestructuro per quedarme nomes amb la primera posicio del array (es la que conte el resultat)
            return resultat;
        } catch (error) {
            throw new Error(SOCIS.errors.insert + JSON.parse(error.message));
        }
    }
    //dades soci
    static async fitxa(dades) {
        try {
            const consultaST = `select * from ${DB.taules.socis} where ${DB.socis.id}=?`;
            const [resultat]= await connexio.execute(consultaST,[dades[SOCIS.id]]);
            return resultat;
        } catch (error) {
            throw new Error(SOCIS.errors.access + JSON.parse(error.message));
        }
    }
    //modificar soci
    static async modificar(dades) {
        try{
            console.log("model modificar")
            console.log(dades)
            const modificaST=`update ${DB.taules.socis} set ${DB.socis.nom}=?, ${DB.socis.cog1}=?,${DB.socis.cog2}=?,${DB.socis.dni}=?,${DB.socis.sexe}=?,${DB.socis.dNaixement}=?,${DB.socis.adreca}=?,${DB.socis.cp}=?,${DB.socis.poblacio}=?,${DB.socis.telefon}=?,${DB.socis.email}=? where ${DB.socis.id}=?`;
            console.log(modificaST)
            const dadesModifica = [dades[SOCIS.nom], dades[SOCIS.cog1], dades[SOCIS.cog2], dades[SOCIS.dni], dades[SOCIS.sexe], dades[SOCIS.dNaixement], dades[SOCIS.adreca], dades[SOCIS.cp], dades[SOCIS.poblacio], dades[SOCIS.telefon], dades[SOCIS.email],dades[SOCIS.id]];
            console.log(dadesModifica)
            const [resultat]=await connexio.execute(modificaST,dadesModifica); 
            console.log(resultat)
            return resultat;
        }catch (error) {
            throw new Error(SOCIS.errors.modificar + JSON.parse(error.message))
        }
    }
    //funcio de llistat de socis
    static async llistat(dades) {
        try {
            const consultaST = `select * from ${DB.taules.socis}`;
            const [resultat] = await connexio.execute(consultaST);//desestructuro i hem quedo nomes amb la primera posicio que es el que conte el resultat de la consulta
            return resultat;
        } catch (error) {
            throw new Error(SOCIS.errors.access + JSON.parse(error.message));
        }
    }
}