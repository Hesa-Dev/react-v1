import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarwars() {


    const { processando, personagens } = useStarWars()
    // async function simularChamadaAPI() {

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
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} />

            ) : (

                <div>Nenhuma Personagem ...</div>
            )}

        </div>
    )
}