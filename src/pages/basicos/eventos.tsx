import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {

    return (

        <div className={`
        flex gap-5 justify-center
        mt-5
        `}>
            <Evento />
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}