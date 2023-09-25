import Botao from "./Botao";
import Display from "./Display";

export default function Contador(){

    return (

        <div className="flex flex-col  p-4 border border-zinc-400 rounded-md">
            <Display valor={100}/> 
            <Botao />
        </div>
    )
}