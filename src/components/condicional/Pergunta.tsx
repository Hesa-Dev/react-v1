import { useState } from "react"
import If from "./If"
import { IconBase } from "react-icons"



interface PerguntaProps {

    texto: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {

    const [aberta, setAberta] = useState<boolean>(false)
    // const temp =  <h1> olha o teste</h1>

    return (

        <div className={`
        
        border border-black rounded-md p-5 
        overflow-hidden
        
        `} >

            {/* caixa de pergunta  */}
            <div
                className="bg-zinc-500 p-5 cursor-pointer select-none"
                onClick={() => setAberta(!aberta)}
            >
                <span>
                    {props.texto}

                </span>

                <IconBase />


            </div>

            {/*  caixa de resposta  */}
            <If test={aberta}>

                {aberta && (
                    <div className="p-5">
                        {props.resposta}
                    </div>
                )}
            </If>


            {/* {aberta && (

                <div className="p-5">
                    {props.resposta}
                </div>
            )} */}
            {/* {aberta ? "Sim" : "Não"} */}

            {/* {temp} */}

        </div>
    )
}