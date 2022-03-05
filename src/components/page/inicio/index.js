import React from 'react'
import Portada from "images/inicio3.jpg";
import Portada2 from "images/inicio2.jpg"

export default function Inicio() {
    return (
        <div className="inicio">   
            <img src={Portada} alt=""/>
            <span></span>
            <img src={Portada2} alt=""/>
        </div>
    )
}
