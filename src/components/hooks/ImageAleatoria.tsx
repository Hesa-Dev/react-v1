import Image from "next/image";
import React, { useState } from 'react';

export default function ImagemAleatoria() {

    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/300x300?'
    // let pesquisa: string = "";

    function urlImagem() {

        return `${url}
               ${pesquisa} `
    }

    function renderizarBotao(valor: string) {

        return (

            <button className={`
            bg-blue-400 flex
             justify-center items-center
             text-white
             px-4 py-2 rounded-md
            `} onClick={() => {

                    alterarPesquisa (valor)
                    console.log(urlImagem())
                }}>
                {valor}
            </button>
        )

    }
    return (

        <div className={`flex flex-col gap-3 border border-zinc-500 p-7 rounded-md`}>
       
       <Image src={urlImagem()}  height={300} width={300} alt="Imagem"/>

            <div className={` flex  gap-5 justify-between `}>
                {renderizarBotao('abastract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>

        </div>
    )
}