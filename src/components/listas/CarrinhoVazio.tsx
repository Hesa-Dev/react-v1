
import { IconCircleX } from "@tabler/icons-react"


export default function CarrinhoVazio() {



    return (

        <div className="flex justify-center gap-2">
            <IconCircleX />
            <span className="text-xl text-yellow-900">Carrinho Vazio</span>
        </div>

    )
}