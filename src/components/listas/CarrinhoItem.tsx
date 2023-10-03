import ItemCarrinho from "@/model/ItemCarrinho";


export default function CarrinhoItem(props:ItemCarrinho){


    return (

        <div>
            {props.produto.nome}
            {props.quantidade}

        </div>
    )

}