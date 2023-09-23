

// validação do tipo de parâmetro da função 
interface CirculoProps{
    texto:string;
    quasePerfeito?:boolean; // ? ->significa parâmetro opcional 
}

export default function Circulo(pros:CirculoProps) {

    return (

        <div className={`
        
         h-64 w-64 
         bg-cyan-500
         flex
         rounded-full
        text-white
        justify-center
        items-center
        font-black
        text-3xl
        ${pros.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        ` }>
            {pros.texto}
        </div>
    )
}