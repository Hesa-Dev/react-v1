
import useStarWars from "@/data/hooks/useStarWars"

interface PersonagensProps {

    personagens: any[]
}
export default function Personagens(props: PersonagensProps) {

    // hook personalizado 
    // const { processando, personagens, ObterPersonagens } = useStarWars()

    return (

        <div className=" flex flex-col justify-center items-center">

            <table className="w-3/5 text-xl">

                <thead>
                    <tr className="bg-zinc-900 ">
                        <th className="p-2 font-black">Nome</th>
                        <th className="p-2 font-black">Altura</th>
                        <th className="p-2 font-black">Peso</th>
                        <th className="p-2 font-black">Acões</th>
                    </tr>
                </thead>

                <tbody>
                    {props.personagens.map((p: any, indice: number) => (
                        <tr key={p.name}
                            className={`
                            text-center 
                            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                            `}>
                            <td className="p-2">{p.name}</td>
                            <td className="p-2" >{p.height}</td>
                            <td className="p-2">{p.mass}</td>
                        </tr>
                    )

                    )}
                </tbody>
            </table>
        </div>
    )
}