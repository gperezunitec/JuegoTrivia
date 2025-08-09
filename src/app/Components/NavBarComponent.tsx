'use client'



import {useContextPregunta} from "@/app/Provider/ProviderPregunta";
import Link from "next/link";

export default function NavBarComponent() {

    const {pregunta,setPregunta,puntaje,setPuntaje}=useContextPregunta()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Puntaje Total</a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" href="/carrito"><span className='badge text-bg-warning'>{puntaje}</span> puntos</Link>
                        </li>



                    </ul>

                </div>
            </nav>
        </>
    )
}