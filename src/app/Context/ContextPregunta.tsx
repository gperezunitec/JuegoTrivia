import {createContext} from "react";
import {Pregunta} from "@/app/Models/Pregunta";

export const contextPregunta= createContext({
    pregunta:[] as Pregunta[],
    setPregunta:(pregunta:Pregunta[])=>{},
    puntaje:0 as number,
    setPuntaje:(puntaje:number)=>{}
})