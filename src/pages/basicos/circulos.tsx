
import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {

    return (

        <div className={`
        flex justify-around 
        items-center 
         h-screen
         bg-orange-200`}>
            <Circulo texto="circ. #1" />
            <Circulo texto="circ. #2" />
            <Circulo texto="circ. #3" />
            <Circulo texto="circ. #4"  quasePerfeito={false}/>
        </div>
    )
}