'use client'
import {useEffect} from "react";
import {useContextPregunta} from "@/app/Provider/ProviderPregunta";




export const PreguntasComponent = () => {

    const {pregunta,setPregunta }=useContextPregunta();


    useEffect(() => {
        setPregunta([{
            idPreguntas: "1",
            descripcionPregunta: "¿React Native permite desarrollar aplicaciones para Android y iOS?",
            opcionRespuesta1: true,  // Sí
            opcionRespuesta2: false, // No
            respuestaCorrecta: true,
            puntajePregunta: 5
        },
            {
                idPreguntas: "2",
                descripcionPregunta: "¿JavaScript es el lenguaje principal usado en React Native?",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 5
            },
            {
                idPreguntas: "3",
                descripcionPregunta: "¿React Native utiliza componentes como View y Text?",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 5
            },
            {
                idPreguntas: "4",
                descripcionPregunta: "¿Expo es una herramienta para trabajar con bases de datos en React Native?",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: false,
                puntajePregunta: 5
            },
            {
                idPreguntas: "5",
                descripcionPregunta: "¿El componente FlatList sirve para mostrar listas de datos?",
                opcionRespuesta1: true,
                opcionRespuesta2: false,
                respuestaCorrecta: true,
                puntajePregunta: 5
            }]);
    },[])


    return (
        <>
            <h2>Lista de Productos</h2>

            <table border={1}>
                <thead>
                <th>id Preguntas</th>
                <th>Descripcion</th>
                <th>Verdadero</th>
                <th>Falso</th>
                </thead>
                <tbody>
                {
                    pregunta.map((pregunta)=>(
                        <tr key={pregunta.idPreguntas}>
                            <td>{pregunta.idPreguntas}</td>
                            <td>{pregunta.descripcionPregunta}</td>
                            <td>
                                <input type="checkbox"
                                checked={pregunta.opcionRespuesta1}/></td>
                            <td><input type="checkbox"
                                       checked={pregunta.opcionRespuesta2}/></td>

                        </tr>

                    ))
                }
                </tbody>
            </table>
        </>
    )

}