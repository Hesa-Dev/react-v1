

import { useCallback, useEffect, useState } from "react"

export default function Contador() {

    console.log("Nova renderização ...!")


    function setValue(value: number, operation: string) {

        if (operation === "add") {

            setValor(valor - 1)
        }
        else {

            setValor(valor + 1)
        }

    }
    const calcularValorMulti10 = useCallback((valor: number) => {
        return valor * 10
    }, [])
    const [valor, setValor] = useState(0)
    // const multi10 = valor*10;
    const [delta, setDelta] = useState(1)
    const [multi10, setMulti10] = useState(0)

    // useEffect 
    useEffect(() => {
        const multi10 = calcularValorMulti10(valor)
        setMulti10(multi10)

    }, [valor, calcularValorMulti10])

    return (

        <div className="flex flex-col gap-5 items-center">

            <span className="text-5xl text-black font-bold">{multi10}</span>
            <span className="text-2xl text-black font-bold">{valor}</span>
            <div className="flex gap-5 ">
                {/* <button className="botao" onClick={()=>setValue(-1,"add")} >-1</button> */}
                {/* <button className="botao" onClick={()=>setValue(-1,"dec")} >+1</button> */}
                <button className="botao" onClick={() => setValor(valor - delta)} >-1</button>
                <button className="botao" onClick={() => setValor(valorAtual => valorAtual + delta)} >+1</button>
            </div>
            <input
                type="number"
                value={delta}
                onChange={(e) => setDelta(+e.target.value)}
                className="bg-zinc-900 p-2 text-white font-bold"
            />
        </div>
    )
}