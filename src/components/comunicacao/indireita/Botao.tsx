
interface BotaoProps {

}


export default function Botao(props: BotaoProps) {

    return (

        <div className="flex justify-between pt-2 gap-2">
            <button className="botao">
                inc
            </button>
            <button className="botao">
                dec
            </button>
        </div>
    )
}