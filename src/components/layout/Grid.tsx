

interface GridProps{

    cols?:number
    children:any
}
export default function Grid(props:GridProps){

    return (

        <div className={`
            grid gap-4  grid-cols-${props.cols??1}
            gap-4 w-full
        `}>
            {props.children}
        </div>
    )


}