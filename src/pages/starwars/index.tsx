import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";

export default function PaginaStarwars() {


    async function simularChamadaAPI() {

        return new Promise(resolve => {

            setTimeout(() => {
                resolve(1)
            }, 6000)

        })
        // const data = Date.now()
        // while (Date.now() < data + 6000) { }
    }
    return (

        <div className="flex justify-center items-center h-screen">

            <Background />
            <Personagens />
        </div>
    )
}