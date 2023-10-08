import Link from "next/link";

export default function Home() {

  return (



    <div className="flex flex-col  justify-center items-center  home gap-5"> 
      <h1 className="text-black font-bold text-4xl  ">
        Curso de ReactJs
      </h1>
      <div className="flex flex-col">
        <Link href="/contexto/contador">
          <span className="text-black font-bold">Contador</span>
        </Link>
        <Link href="/listas/produtos">
          <span className="text-black font-bold">Produtos</span>
        </Link>
      </div>
    </div>
  )

}