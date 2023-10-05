import useProcessando from "@/data/hooks/useProcessando"
import { useState } from "react"

export default function Personagens() {

    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])

    async function simularChamadaAPI() {

        // Chamando API 
        const resp = await fetch('https://swapi.dev/api/people')
        // OBTER DADOS DA API E CONVERTER EM JSON 
        const dados = await resp.json()
        // console.log(dados)
        // console.log(dados.results) // dados.result devolve total de arrays
        // console.log(dados.next) // dados.next devolve a url da api 
        setPersonagens(dados.result)

        // return new Promise(resolve => {

        //     setTimeout(() => {
        //         resolve(1)
        //     }, 6000)

        // })
        // const data = Date.now()
        // while (Date.now() < data + 6000) { }
    }


    async function ObterPersonagens() {


        try {

            iniciarProcessamento()
            // setProcessando(true)
            await simularChamadaAPI()

        } finally {

            // setProcessando(false)
            finalizarProcessamento()
        }

    }

    function renderizarPersonagens() {

        return(

            <ul>
            {personagens.map((p: any) =>

                <li key={p.name}>{p.name}</li>
            )}
        </ul>
        )
      

    }
    return (

        <div>

            {processando ? (
                <div>Processando ...</div>
            ) : personagens.length>0 ? (

                renderizarPersonagens()
            ) : (

                <div>Nenhum personagens Encontrado</div>
            )}


            <button onClick={ObterPersonagens} className="bg-blue-500 p-2 text-white" >Obter</button>
        </div>
    )
}