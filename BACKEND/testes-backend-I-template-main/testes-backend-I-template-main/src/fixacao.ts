export const fixacao = (palavra:string)=>{
    if (typeof palavra !== "string"){
        return null
    }

    return palavra.split("")
}