
interface BotaoProps {

    inc: () => void
    dec: () => void

}

export default function Botao(props: BotaoProps) {

    return (

        <div className="flex justify-between pt-2 gap-2">
            <button className="botao flex-1" onClick={props.inc}>
                Inc
            </button>
            <button className="botao flex-1 " onClick={props.dec}>
                Dec
            </button>
        </div>
    )
}