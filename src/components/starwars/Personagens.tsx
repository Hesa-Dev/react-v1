
import useStarWars from "@/data/hooks/useStarWars"
export default function Personagens() {

    // hook personalizado 
    const { processando, personagens, ObterPersonagens } = useStarWars()

    function renderizarPersonagens() {

        return (

            <ul>
                {personagens.map((p: any) => (

                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }
    return (

        <div className=" flex flex-col justify-center items-center ">

            {processando ? (
                <div>Processando ...</div>
            ) : personagens?.length > 0 ? (

                renderizarPersonagens()
            ) : (

                <div className="text-white text-xl font-bold">Nenhum personagens Encontrado</div>
            )}


            <button onClick={ObterPersonagens} className="bg-blue-500 p-2 text-white" >Obter</button>
        </div>
    )
}