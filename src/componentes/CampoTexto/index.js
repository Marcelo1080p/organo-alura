import React from "react";
import './CampoTexto.css'
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.nome}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}


export default CampoTexto