import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireita(){

 return (

    <div className="flex justify-center flex-col items-center h-screen gap-5">
        <h1 className="text-5xl mb-10 bg-slate-400"> comunicação direita</h1>
        <Avo nome="Jose" sobrenome="Pedro" />
        <Avo nome="Vasco" sobrenome="Ribeiro" />
    </div>
 )

}