import Carrinho from "@/components/listas/Carrinho"
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


        // console.log(produto) 
        // ... -> pega a ultima váriavel da linha de cima ex:. 

        // const a =3 
        // const b =4 
        // const soma = (...b + a )

        const itemAtual = itens.find((itens)=>itens.produto.id==produto.id) ?? {quantidade:0,produto}
        const novoItem = {...itemAtual , quantidade : itemAtual.quantidade +1}
        const outrosItens = itens.filter((itens) => itens.produto)
        setItens([...outrosItens,novoItem])
    }
    return (

        <div className={`
            flex justify-center items-center h-screen
            flex-col gap-10
        `}>
            {/* <ProdutoItem produto={produto} />  */}
<Carrinho  itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>

    )
}