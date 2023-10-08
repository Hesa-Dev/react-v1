import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import { createContext, useState } from "react"

interface CarrinhoContextoProps{

    itens: ItemCarrinho[]
    adicionarProduto : (produto:Produto)=>void
}

const CarrinhoContexto = createContext<CarrinhoContextoProps>({} as any)
export default CarrinhoContexto

export function CarrinhoProvider(props: any) {


    const [itens, setItens] = useState<ItemCarrinho[]>([])
    function adicionarProduto(produto: Produto) {

        // console.log(produto) 
        // ... -> pega a ultima váriavel da linha de cima ex:. 

        // const a =3 
        // const b =4 
        // const soma = (...b + a )
        
        const itemAtual = itens.find((itens) => itens.produto.id == produto.id) ?? { quantidade: 0, produto }
        const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
        const outrosItens = itens.filter((itens) => itens.produto)
        setItens([...outrosItens, novoItem])
    }

    return (

        <CarrinhoContexto.Provider value={{

            itens, adicionarProduto
        }}>

            {props.children}


        </CarrinhoContexto.Provider>

    )

}