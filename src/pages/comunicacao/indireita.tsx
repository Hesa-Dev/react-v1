// import Avo from "@/components/comunicacao/direta/Avo";
import Contador from "@/components/comunicacao/indireita/Contador";

export default function PaginaIndireita() {

    return (

        <div className="flex justify-center flex-col items-center h-screen gap-5">
            <h1 className="text-5xl mb-10 bg-slate-400"> comunicação indireita</h1>

            <div className=" flex gap-5 ">
                <Contador />
                <Contador />
                <Contador />
            </div>


        </div>
    )

}