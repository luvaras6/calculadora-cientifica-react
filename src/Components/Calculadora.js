import Boton from "./Boton";
import Pantalla from "./Pantalla";
import BotonClear from "./BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import React from 'react';

function Calculadora() {
    const [input, setInput] = useState("");

    //input anterior concatenado con el nuevo valor
    const agregarInput = (valor) => {
        setInput(input + valor);
    };

    const calcularResultado = () => {
        /*evaluate convierte una cadena de caracteres en una expresion matematica si el string no es vacio -> evaluate*/
        try {
            if (input) {
                if (input.includes("sqrt3")) {
                    const newInput = input.replace("sqrt3", "") + "^(1/3)";
                    setInput(evaluate(newInput));
                } else if (input.includes("sqrtn")) {
                    let raizNindice = input.split("s");
                    let newInput = raizNindice[1].replace("qrtn", "");
                    newInput = newInput + "^" + 1 / raizNindice[0];
                    setInput(evaluate(newInput));
                } else if (input.includes("log(-")) {
                    setInput("nan");
                } else {
                    setInput(evaluate(input));
                }
            } else {
                alert("Por favor ingrese valores para realizar los cálculos.");
            }
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="App">
            <div className="contenedor-calculadora">
                <Pantalla input={input} />
                <div className="fila">
                    <Boton manejarClic={agregarInput}>(</Boton>
                    <Boton manejarClic={agregarInput}>)</Boton>
                    <Boton manejarClic={agregarInput}>x!</Boton>
                    <Boton manejarClic={agregarInput}>^2</Boton>
                    <Boton manejarClic={agregarInput}>^3</Boton>
                    <Boton manejarClic={agregarInput}>^</Boton>
                    <Boton manejarClic={agregarInput}>sqrt</Boton>
                    <Boton manejarClic={agregarInput}>sqrt3</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClic={agregarInput}>sin</Boton>
                    <Boton manejarClic={agregarInput}>cos</Boton>
                    <Boton manejarClic={agregarInput}>tan</Boton>
                    <Boton manejarClic={agregarInput}>log10</Boton>
                    <Boton manejarClic={agregarInput}>log</Boton>
                    <Boton manejarClic={agregarInput}>exp</Boton>
                    <Boton manejarClic={agregarInput}>%</Boton>
                </div>

                <div className="fila">
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={() => {setInput(3.141592);}}>pi</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                </div>

                <div className="fila">
                    <Boton>MR</Boton>
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <BotonClear
                        manejarClear={() => {
                            setInput("");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calculadora;