import Tabela from "@/components/listas/Tabela"
import { IconBallFootball } from "@tabler/icons-react"
import { time } from "console"


export default function PaginaListaBasica() {


    const tabelaListaSerieA = [

        ' Palmeiras',
        ' Grêmio',
        ' Bragantino',
        'Fluminense',
        'Athletico-PR',
        ' Flamengo',
        ' Fortaleza',
        ' Atlético-MG',
    ]
    return (


        <div className={`
        
        flex justify-center items-center h-screen
        flex-col
        `}>

             <h1 className="text-5xl font-bold text-red-400 mb-5"> Renderização de Lista </h1>
            <h1 className="text-5xl font-bold flex items-center gap-2 mt-5">
                Tabela Serie A
                <IconBallFootball size={50} stroke={1} className="text-green-400" />
            </h1>
            <Tabela times={tabelaListaSerieA} />
        </div>

    )
}