import Carrinho from "@/components/listas/Carrinho"
import ListaProdutos from "@/components/listas/ListaProdutos"
// import ProdutoItem from "@/components/listas/ProdutoItem"
import { produtos } from "@/constants/produtos"
import CarrinhoContexto from "@/data/contexts/CarrinhoContexto"
import Link from "next/link"
import { useContext} from 'react'


export default function PaginaProdutos() {

    // const ctx = useContext(CarrinhoContexto)
    const {itens,adicionarProduto} = useContext(CarrinhoContexto)

    
    return (

        <div className={`
            flex justify-center items-center h-screen
            flex-col gap-10
        `}>
            {/* <ProdutoItem produto={produto} />  */}
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
            <Link href="/" className="text-black font-bold" >Voltar</Link>
        </div>

    )
}