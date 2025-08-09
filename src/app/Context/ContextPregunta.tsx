import {createContext} from "react";
import {Pregunta} from "@/app/Models/Pregunta";

export const contextPregunta= createContext({
    pregunta:[] as Pregunta[],
    setPregunta:(pregunta:Pregunta[])=>{},
    totalPuntaje:()=>{}
})