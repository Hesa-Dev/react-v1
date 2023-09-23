import Caixa from "@/components/basicos/Caixa";

export default function SegundaPaginaCaixa() {

    return (
        <div className="flex gap-7">

            <Caixa>caixa1</Caixa>
            <Caixa>caixa2</Caixa>
            <Caixa>
                <ul>
                    <li>val 1</li>
                    <li>val 2 </li>
                    <li>val 3</li>
                </ul>
            </Caixa>
            {/* <Caixa />
            <Caixa />
            <Caixa /> */}
        </div>
    )
}