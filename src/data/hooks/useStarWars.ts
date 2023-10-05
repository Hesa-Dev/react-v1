import { useState } from "react"
import useProcessando from "@/data/hooks/useProcessando"


// hooks personalizados useStarWars 
export default function useStarWars() {

    const [personagens, setPersonagens] = useState<any>([])
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()



    async function ObterPersonagens() {


        try {

            iniciarProcessamento()

            const resp = await fetch('https://swapi.dev/api/people')
            // OBTER DADOS DA API E CONVERTER EM JSON 
            const dados = await resp.json()
            // console.log(dados)
            //console.log(dados.results) // dados.result devolve total de arrays
            // console.log(dados.next) // dados.next devolve a url da api 
            setPersonagens(dados.result)


            // setProcessando(true)
            // await simularChamadaAPI()

        } finally {

            // setProcessando(false)
            finalizarProcessamento()
        }
    }

    return {
        // exportando variáveis e funções 

        ObterPersonagens,
        personagens,
        processando

    }

}