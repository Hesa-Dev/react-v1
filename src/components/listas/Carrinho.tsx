import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"

interface CarrinhoProps {

    itens: ItemCarrinho[]
}


export default function Carrinho(props: CarrinhoProps) {

    return (

        <div className="flex flex-col w-full ">

            <div className="flex bg-zinc-500 text-3xl justify-center p-3 text-white font-bold items-center ">
                Carrinho 
            </div>
            <div className="p-5">
                {props.itens.map((item, i) => {

                    return (
                        <CarrinhoItem key={i} {...item} />
                    )
                })}
            </div>
        </div>
    )
}