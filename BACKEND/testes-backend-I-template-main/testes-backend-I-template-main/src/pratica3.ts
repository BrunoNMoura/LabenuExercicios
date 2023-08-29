export const pratica3 = (n1:number, n2:number):null|{soma:number,multiplicacao:number}=>{
    if(typeof n1 !== "number"||typeof n2 !== "number"){
        return null
    }

    return {
        soma: n1 + n2,
        multiplicacao: n1 * n2
    }
}