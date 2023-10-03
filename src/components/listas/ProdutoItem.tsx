import Produto from "@/model/Produto"
import Image from "next/image"
import { IconShoppingCart } from "@tabler/icons-react"




interface ProdutoItemProps {

    produto: Produto
    comprar:(Produto:Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {

    const { produto } = props

    return (

        <div className={`
            flex  flex-col border
             border-zinc-800
             rounded-md
             p-1
         `}
        >
            {/* imagem do produto */}
            <Image
                // src={props.produto.image}
                src={produto.image}
                width={300}
                height={300}
                alt="image Produto"
                className="rounded-md"
            />

            {/* info produto  */}
            <div className="flex flex-col p-3 gap-3" >

                {/*  nome do produto | Preco do produto */}
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">
                        {produto.nome}
                    </div>

                    {/*  preco do produto  */}
                    <div className="text-2xl text-green-600 font-black">
                        $  {produto.preco}
                    </div>
                </div>

                {/* descricao do produto  */}
                <div className="text-xl  ">
                    {produto.descricao}
                </div>
                {/* botão para comprar  */}
                <div >
                    <button className="botao flex w-full gap-2  justify-center" onClick={()=>props.comprar(produto)}>
                        <IconShoppingCart /> Comprar 
                    </button>
                </div>
            </div>
            {/* info produto END  */}

        </div>

    )

}