


export default class Moeda {

 static formatar (valor:number){

    return new Intl.NumberFormat('pt-BR',{

        style: 'currency',
        currency:'BRL'
    }).format(valor) 

 }


}

//    static   formatar(valor:number) {
        

//         return new Intl.NumberFormat('pt-BR',{

//             style: 'currency',
//             currency:'BRL'
//         }).format(valor) 
//     }

