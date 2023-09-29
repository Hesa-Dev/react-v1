import ProdutoItem from "@/components/listas/ProdutoItem"
import { produtos } from "@/constants/produtos"


export default function PaginaProdutos() {
    
 const produto=produtos [0]
    
    return (

        <div className={`
        
        flex justify-center items-center h-screen
        flex-col
        `}>
         <ProdutoItem produto={produto} /> 
        </div>

    )
}