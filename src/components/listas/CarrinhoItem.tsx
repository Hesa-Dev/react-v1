import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";


export default function CarrinhoItem(props: ItemCarrinho) {

    //  function exibirMoeda(valor:number){

    //     return new Intl.NumberFormat('pt-BR',{

    //         style: 'currency',
    //         currency:'BRL'
    //     }).format(valor)
    //  }

    return (

        <div className=" flex items-center rounded-full bg-blue-500 ">


            <span className="w-7 h-7 rounded-full bg-blue-200 p-2 flex justify-center items-center">  {props.quantidade} </span>

            <span >
                {props.produto.nome}

            </span>

            <span className="pr-3 px-3">
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>

        </div>
    )

}