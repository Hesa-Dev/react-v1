import ImagemAleatoria from "@/components/hooks/ImageAleatoria";


export default function PaginaImagens() {

    return (

        <div className={`
        flex  justify-center
        h-screen gap-5 items-center
        `}>
            <ImagemAleatoria/>
            <ImagemAleatoria/>
            <ImagemAleatoria/>
        </div>
        
    )

}