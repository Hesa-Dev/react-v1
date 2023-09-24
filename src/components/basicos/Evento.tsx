export default function Evento(){

    let contador=0;

    function incrementar(){

        console.log(contador++)
    }

return (

    <button className={`
    h-72 w-72
    bg-lime-500
    text-white font-bold
    justify-center items-center
    flex
    text-4xl 
    ` }   
    onClick={incrementar}>
        Evento
    </button>
)

}