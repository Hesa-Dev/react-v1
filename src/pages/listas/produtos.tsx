import ListaProdutos from "@/components/listas/ListaProdutos"
// import ProdutoItem from "@/components/listas/ProdutoItem"
import { produtos } from "@/constants/produtos"
import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import {useState} from 'react'


export default function PaginaProdutos() {

    const produto = produtos[0]

    const [itens, setItens]  = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto){


        console.log(produto)

    }
    return (

        <div className={`
            flex justify-center items-center h-screen
            flex-col
        `}>
            {/* <ProdutoItem produto={produto} />  */}

            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>

    )
}