'use client'
import {Plantilla} from "@/app/Models/Plantilla";
import {useContext, useState} from "react";
import {Pregunta} from "@/app/Models/Pregunta";
import {contextPregunta} from "@/app/Context/ContextPregunta";
import NavBarComponent from "@/app/Components/NavBarComponent";



export default function ProviderPregunta({children}:Plantilla) {

    const datos: Pregunta[] = [];


    const [pregunta, setPregunta] = useState<Pregunta[]>([])



    return (

        <contextPregunta.Provider value={{pregunta,setPregunta }}>
            <NavBarComponent></NavBarComponent>
            {children}
        </contextPregunta.Provider>

            )

}

export function useContextPregunta(){
    return useContext(contextPregunta)
}