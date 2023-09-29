import { useState } from "react"
import If from "./If"
import { IconChevronDown } from "@tabler/icons-react"
import { IconChevronUp } from "@tabler/icons-react"




interface PerguntaProps {

    indice : number 
    texto: string
    resposta: string
    aberta:boolean
    alternarVisibilidade:(indice:number) =>void
}

export default function Pergunta(props: PerguntaProps) {

    // const [aberta, setAberta] = useState<boolean>(false)
    // const temp =  <h1> olha o teste</h1>

    return (

        <div className={`
        
        border border-black rounded-md p-5 
        overflow-hidden
        
        `} >

            {/* caixa de pergunta  */}
            <div
                className="bg-zinc-500 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => props.alternarVisibilidade(props.indice)}
                // nClick={() => setAberta(!props.aberta)}
            >
                <span>
                    {props.texto}
                </span>

                 {props.aberta ? <IconChevronDown /> : <IconChevronUp /> }
                {/* {aberta ? <IconChevronDown /> : <IconChevronUp /> } */}

            </div>

            {/*  caixa de resposta  */}
            <If test={props.aberta}>
                {/* {props.aberta && ( */}
                    <div className="p-5">{props.resposta} </div>
                {/* )} */}
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