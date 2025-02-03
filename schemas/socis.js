import z from "zod"
import { SOCIS } from "../lib/constants/socis.js"
const validacio=SOCIS.errors.validacio
//esquema de validacio de les dades rebudes amb zod
const esquemaSoci=z.object({
    [SOCIS.nom]:z.string({message:validacio.nom}).min(1,{message:validacio.nom_min}),
    [SOCIS.cog1]:z.string({message:validacio.cog1}).min(1,{message:validacio.cog1_min}),
    [SOCIS.cog2]:z.string({message:validacio.cog2}).min(1,{message:validacio.cog2_min}),
    [SOCIS.dni]:z.string({message:validacio.dni}).min(8,{message:validacio.dni_min}),
    [SOCIS.sexe]:z.string({message:validacio.sexe}).min(1,{message:validacio.sexe_min}),
    [SOCIS.sexe]:z.string({message:validacio.sexe}).min(1,{message:validacio.sexe_min}),
    [SOCIS.dNaixement]:z.string({message:validacio.data_naix}).regex(new RegExp(/^\d{4}[\/|\-|\.]\d{2}[\/|\-|\.]\d{2}$/),{message:validacio.data_naix_valid}),
    [SOCIS.adreca]:z.string({message:validacio.adreca}).min(1,{message:validacio.adreca_min}),
    [SOCIS.cp]:z.string({message:validacio.cp}).trim().min(5,{message:validacio.cp_min}).regex(new RegExp(/^\d{5}$/),{message:validacio.cp_no_num}),
    [SOCIS.poblacio]:z.string({message:validacio.poblacio}).min(1,{message:validacio.poblacio_min}),
    [SOCIS.telefon]:z.string({message:validacio.telefon}).min(7,{message:validacio.telefon_min}),
    [SOCIS.email]:z.string({message:validacio.email}).min(5,{message:validacio.email_min}).email({message:validacio.email_valid}),
});

export async function validaSoci(dades){
    console.log("validacio soci")
    console.log(dades)
    return await esquemaSoci.safeParseAsync(dades)
}

