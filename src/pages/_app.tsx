import { CarrinhoProvider } from '@/data/contexts/CarrinhoContexto'
import { ContadorProvider } from '@/data/contexts/ContadorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (

    // Dar acesso  a toda aplicação do nosso componente provider


    <CarrinhoProvider >
      <ContadorProvider>
        <Component {...pageProps} />
      </ContadorProvider>
    </CarrinhoProvider>



  )


}
