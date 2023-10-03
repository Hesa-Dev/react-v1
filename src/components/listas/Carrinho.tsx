import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"
import { IconCircleX } from "@tabler/icons-react"
import CarrinhoVazio from "./CarrinhoVazio"
import Moeda from "@/utils/Moeda"

interface CarrinhoProps {

    itens: ItemCarrinho[]
}


export default function Carrinho(props: CarrinhoProps) {

    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)
    return (

        <div className="flex flex-col w-full border border-blue-900 rounded-md ">

            <div className="flex justify-between items-center bg-zinc-500 text-3xl  p-3 text-white font-bold ">
                <span> Carrinho</span>
                <span> {Moeda.formatar(total)}</span>
            </div>
            <div className="flex gap-5 p-5">


                {props.itens.length == 0 ? (
                    <CarrinhoVazio />
                ) : (

                    props.itens.map((item, i) => {

                        return <CarrinhoItem key={i} {...item} />

                    })

                )}

            </div>
        </div>
    )
}