import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarwars() {


    const { processando, personagens, filmes, voltar, selecionarPersonagem } = useStarWars()

    //  function selecionarPersonagem(personagem: any){

    //     console.log('selecionado: ' + personagem.name)
    //  }
    // // async function simularChamadaAPI() {

    //     return new Promise(resolve => {

    //         setTimeout(() => {
    //             resolve(1)
    //         }, 6000)

    //     })
    //     // const data = Date.now()
    //     // while (Date.now() < data + 6000) { }
    // }
    return (

        <div className="flex justify-center items-center h-screen relative">

            <Background />

            {processando ? (
                <div>Processando ...</div>

            ) : filmes.length > 0 ? (

                <Filmes filmes={filmes}  voltar={voltar}/>

            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} selecionar={selecionarPersonagem} />

            ) : (

                <div>Nenhuma Personagem ...</div>
            )}

        </div>
    )
}