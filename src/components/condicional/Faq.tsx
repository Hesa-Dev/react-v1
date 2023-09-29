import Pergunta from "./Pergunta";
import { useState } from "react"

export default function Faq() {

    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade (indice:number){

        if (indice===ativo) {
            
            setAtivo(-1)
        }
        else{

            setAtivo(indice)
        }
    }

    return (

        <div  className="flex flex-col gap-2 w-3/4">

            <Pergunta 
                indice={1} aberta={ativo===1} alternarVisibilidade={alternarVisibilidade} 
                texto="Como Fazer o Check-in" resposta=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" />
            <Pergunta 
                indice={2} aberta={ativo===2}  alternarVisibilidade={alternarVisibilidade} 
                texto="Será Possível Andar de Canoa" resposta=" efault model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." />
            <Pergunta 
                indice={3} aberta={ativo===3}  alternarVisibilidade={alternarVisibilidade}  
                texto="Posso ter 3 Dados Movéis" resposta="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going t" />

 
        </div>
    )
}