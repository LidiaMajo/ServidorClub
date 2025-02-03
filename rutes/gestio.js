//carrego Router de express
import {Router} from "express";
//creo un route gestio per aixi escurçar les rutes (/api/gestio/)
export const routerGestio = Router();
import { Controlador_Socis } from "../controladors/socis.js";
import { SOCIS } from "../lib/constants/socis.js";
//routes socis
routerGestio.post("/afegir",Controlador_Socis.afegir)
routerGestio.get("/llistat",Controlador_Socis.llistat)
routerGestio.get("/fitxa",Controlador_Socis.fitxa)
routerGestio.patch("/modificar",Controlador_Socis.modificar)