import Produto from "@/model/Produto"
import Image from "next/image"



interface ProdutoItemProps {

    produto: Produto
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
            <Image
                src={props.produto.image}
                width={300}
                height={300}
                alt="image Produto"
                className="rounded-md"
            />

            {/* info produto  */}
            <div className={`
            flex flex-col p-3
            
            `}>

                <div className="text-xl">
                    {produto.nome}
                </div>
            </div>

        </div>

    )

}