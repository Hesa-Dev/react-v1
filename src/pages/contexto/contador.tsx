import Contador from "@/components/contexto/Contador";

export default function PaginaContador() {


    return (

        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
<h1 className="text-black font-bold text-4xl mb-5"> Usando useContext &   Context API  </h1>


            {/* <ContadorProvider> */}
                <Contador />
            {/* </ContadorProvider> */}
        </div>
    )
}