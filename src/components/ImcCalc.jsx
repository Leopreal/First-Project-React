import { useState } from "react";

import Button from "./Button";
import "./ImcCalc.css";

import React from 'react'

const ImcCalc = ({calcIMC}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");


    const clearForm = (e) => {
        e.preventDefault();
        setHeight("")
        setWeight("")


    };

    const ValidDigites = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = ValidDigites(e.target.value)

        setHeight(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = ValidDigites(e.target.value)

        setWeight(updateValue);
    }


  return (
    <div id="calc-container">
        <h2>Calculadora IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura: </label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder="Exemplo 1,75"
                    onChange={(e) => handleHeightChange(e)}
                    value={height} // Mudando dados com metodos externos
                    />
                    
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso: </label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder="Exemplo 70.5kg"
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}
                    />
                    
                </div>
            </div>
            <div className="action-control">
                <Button id={"calc-btn"} text={"Calcular"} action={(e) => calcIMC(e, height, weight)}/>
                <Button id={"clear-btn"} text={"Limpar"} action={clearForm}/>
            </div>
        </form>

    </div>
  )
}

export default ImcCalc