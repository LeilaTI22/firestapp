import React from 'react'
import { useState } from "react";

export const Contador = () => {

    
    const [contador, setContador] = useState(0)

    const incrementar = contador => {
        setContador(contador += 1)
    }
  return (
    <div>
        <h2 className="text-3xl mb-5">Contador: {contador}</h2>
        <button 
              className="bg-blue-500 p-5 text-white rounded-xl mb-10 mr-3 hover:bg-blue-700 transition-all"
              onClick={() => incrementar(contador)}>
              INCREMENTAR
            </button>

            <button 
              className="bg-blue-500 p-5 text-white rounded-xl mb-10 hover:bg-blue-700 transition-all"
              onClick={() => setContador(0)}
              >
              RESETEAR
        </button>
    </div>
  )
}
