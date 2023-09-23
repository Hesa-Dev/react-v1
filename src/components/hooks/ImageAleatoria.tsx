export default function ImagemAleatoria() {

    const url='https://source.unsplash.com/featured/300x300?'
    let pesquisa:string ="";

    function renderizarBotao(valor:string) {

        return (

            <button className={`
            bg-blue-400 flex
             justify-center items-center
             text-white
             px-4 py-2 rounded-md
            `} onClick={()=> {
                
                pesquisa = valor
                console.log(pesquisa)
             } }>
               {valor} 
            </button>
        )

    }
    return (

        <div className={`
       flex flex-col gap-3  `}>

            {renderizarBotao('abastract')}
            {renderizarBotao('city')}
            {renderizarBotao('person')}
        </div>
    )
}