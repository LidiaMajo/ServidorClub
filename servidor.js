//importo express i json
import express, {json} from "express";
import cors from "cors"
//preparo el servidor
//guardo el port per el servidor o assigno el 3000
const PORT = process.env.PORT ?? 3000;
const servidor=express();
servidor.disable("x-powered-by");
//importo cors i defineixo origens valids
//servidor.use(cors());
servidor.use(cors({
    origin:(origin,callback)=>{
        console.log(origin,"origen peticio")
        const ORIGENS_ACEPTATS=[
            "https://clubarcsalt.org",
            "http://clubarcsalt.org",
            "https://www.clubarcsalt.org",
            "http://www.clubarcsalt.org",
           ]
        if(ORIGENS_ACEPTATS.includes(origin)){
            return callback(null,true);
        }
        if(!origin){
            return callback(null,true)
        }
        return callback(new Error("Not allowed by CORS"));
    }
}));
//midleware per els json
servidor.use(json());
//midleware per poder llegir forms html post
servidor.use(express.urlencoded({ extended: false }));
//importem el router
import { routerGestio } from "./rutes/gestio.js";
//activo l'enrutador
servidor.use("/api/gestio/socis",routerGestio);
//poso el servidor a escoltar el port
servidor.listen(PORT,()=>{
    console.log(`el servidor esta escoltant a http://localhost:${PORT}`)
})

