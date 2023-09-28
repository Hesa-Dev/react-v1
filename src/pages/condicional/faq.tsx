import Faq from "@/components/condicional/Faq";



export default function PaginaFaq() {

    return (


        <div className="h-screen justify-center " >

            {/* title  */}
            <div className="flex justify-center items-center mt-5 mb-2 text-black font-bold">
                <h1 className="items-center">Renderização Condicional </h1>
            </div>

            {/*  components */}
            <div className="gap-2 flex justify-center items-center " >
                <Faq />
            </div>


        </div>
    )
}