import { time } from "console"

interface TabelaProps {

    times: string[],

}

export default function Tabela(props: TabelaProps) {

     // transformando uma string em <li> v1  
    const item: any[] = []
    for (let index = 0; index < props.times.length; index++) {

        // console.log(props.times[index])
        item.push((

            <li key={props.times[index]} className="text-xl">
                {props.times[index]}
            </li>
        ))
    }

    // transformando uma string em <li> usando Map  v2 
    const item2 = props.times.map((time,i) => {
        return (

            <li key={time} 
                className={`
               text-xl list-decimal ${i % 2===0 ? 'text-black ' : 'text-blue-500'}
            `}>

                {time}
            </li>
        )
    })
    return (

        <ol>

            <li>

                {item2}
            </li>
        </ol>
    )
}