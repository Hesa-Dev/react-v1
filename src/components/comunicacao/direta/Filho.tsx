
interface FilhoProps {

    nome: string;
    sobrenome: string;
}

export default function Filho(props: FilhoProps) {


    return (

        <div className={`
        
        flex justify-center gap-2
        bg-green-300
        rounded-md p-5 border border-white
        `}>

            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Filho:  </span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        </div>
    )
}