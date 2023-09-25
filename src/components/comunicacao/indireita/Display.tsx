
interface DisplayProps{

    valor: number
}


export default function Display(props:DisplayProps){

    return (

        <div className="text-5xl font-black p-3 bg-zinc-400 rounded-md flex flex-1 justify-center items-center">
            {props.valor} 
        </div>
    )
}