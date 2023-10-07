import { useCallback, useEffect, useState } from "react"
import useProcessando from "@/data/hooks/useProcessando"


// hooks personalizados useStarWars 
export default function useStarWars() {

    const [personagens, setPersonagens] = useState<any[]>([])
    const [personagem, setPersonagem] = useState<any>([])
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [filmes, setFilmes] = useState<any>([])

    // Codigo para Obter Filmes 
    const obterFilmes = useCallback(async function (personagem: any) {
        if(!personagem?.films?.length) return
        try {
            iniciarProcessamento()
            const reqs = personagem.films.map(async (film: string) => {
                const resp = await fetch(film)
                return resp.json()
            })

            const filmes = await Promise.all(reqs)
            setFilmes(filmes)
        } finally {
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])


    // Codigo para Obter Personagens 
    const   ObterPersonagens = useCallback(async function() {
        
        try {

            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people')
            // OBTER DADOS DA API E CONVERTER EM JSON 
            const dados = await resp.json()
            // console.log(dados)
            //console.log(dados.results) // dados.result devolve total de arrays
            // console.log(dados.next) // dados.next devolve a url da api 
            setPersonagens(dados.results)


            // setProcessando(true)
            // await simularChamadaAPI()

        } finally {

            // setProcessando(false)
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])


    function selecionarPersonagem(personagem: any){

        setPersonagem(personagem)
        // console.log(personagem.films)
     }

    //   Função para Voltar 

     function voltar() {
        setPersonagem(null)
        setFilmes([])
    }


    //  Personagens 
    useEffect(()=>{

        ObterPersonagens()
    },[ObterPersonagens])

    // Filmes 
    useEffect(() => {
        obterFilmes(personagem)
    }, [personagem, obterFilmes])

    return {
        // exportando variáveis e funções 

        // ObterPersonagens,
        personagens,
        processando,
        selecionarPersonagem,
        filmes,
        voltar
    }

}