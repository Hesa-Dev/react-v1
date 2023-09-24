import Pai from "./Pai";

interface AvoProps {

    nome: string;
    sobrenome: string;
}


export default function Avo(props: AvoProps) {

    return (

        <div className={`
        
        flex gap-5 flex-col
        bg-purple-300
        rounded-md p-5 border border-white
        `}>

            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Avô:  </span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
                <Pai nome="Joao" sobrenome={props.sobrenome} />
                <Pai nome="Manuel" sobrenome={props.sobrenome} />
                <Pai nome="Carlos" sobrenome={props.sobrenome} />
            </div>

        </div>
    )
}