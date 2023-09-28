import { useState } from "react"

interface PerguntaProps{

    texto:string
    resposta:string
}

export default function Pergunta(props:PerguntaProps) {

    const [aberta, setAberta] = useState<boolean>(false)
    // const temp =  <h1> olha o teste</h1>

    return (

        <div className={`
        
        border border-black rounded-md p-5 
        overflow-hidden
        
        `} >

            <div
                className="bg-zinc-500 p-5 cursor-pointer select-none"
                onClick={() => setAberta(!aberta)}
            >
                {props.texto}
            </div>
            {aberta && (

                <div className="p-5">
                     {props.resposta}
                </div>
            )}
            {/* {aberta ? "Sim" : "Não"} */}

            {/* {temp} */}

        </div>
    )
}