import Botao from "./Botao";
import Display from "./Display";
import {useState} from "react"

export default function Contador(){

const [num,setNum] = useState<number>(0)

// funcão para incrementar dados 
function incrementar(){

  setNum(num+1)
}

// funcão para decrementar
function decrementar(){

    setNum(num-1)
    
}
    return (

        <div className="flex flex-col  p-4 border border-zinc-400 rounded-md  w-72 h-72">
            <Display valor={num}/> 
            <Botao inc={incrementar} dec={decrementar} />
        </div>
    )
}