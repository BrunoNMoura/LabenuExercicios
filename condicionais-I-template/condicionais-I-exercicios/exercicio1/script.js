const num = (numero) => {

if(numero % 2 === 0){
    return `O numero ${numero} é par`
}else{
    return `O numero ${numero} não é par`
}
}

console.log(num(10))