import { Model_Socis } from "../models/socis.js";
import { validaSoci } from "../schemas/socis.js";
console.log("controlador socis")
export class Controlador_Socis{
    static async afegir(pet,res){
        console.log("dades:",pet.body)
        console.log("dades2:",pet.query)
        const validacio=await validaSoci(pet.body)
        console.log(validacio)
        if(!validacio.success){
            return res.status(400).json({error: JSON.parse(validacio.error.message)})
        }
        console.log("funcio afegir controlador")
        console.log(pet.body)
        const nouSoci=await Model_Socis.afegir(pet.body) 
        return res.status(201).json(nouSoci);  
    }
    static async fitxa(pet,res){
        console.log("funcio fitxa controlador soci")
        console.log(pet.query)
        const soci=await Model_Socis.fitxa(pet.query)
        return res.status(201).json(soci)
    }
    static async modificar(pet,res){
        const validacio=await validaSoci(pet.body)
        console.log(validacio)
        if(!validacio.success){
            return res.status(400).json({error: JSON.parse(validacio.error.message)})
        }
        console.log("funcio modificar controlador soci")
        console.log(pet.body)
        const soci=await Model_Socis.modificar(pet.body)
        return res.status(201).json(soci)
    }
    static async llistat(pet,res){
        console.log("funcio de llistat de socis")
        const llistat=await Model_Socis.llistat(pet.query)
        return res.status(201).json(llistat);  
    }
}