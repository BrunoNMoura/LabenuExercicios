let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

const suaNacionalidade = (nacionalidade) => {
if(nacionalidade === "brasileira"||"brasileiro"){
    console.log("sua nacionalidade é",nacionalidade)
}else if(nacionalidade === "argentina"||"argentino"){
    console.log("sua nacionalidade é",nacionalidade)
}else if(nacionalidade === "uruguaia"||"uruguaio"){
    console.log("sua nacionalidade é",nacionalidade)
}else if(nacionalidade === "chilena"||"chileno"){
    console.log("sua nacionalidade é",nacionalidade)
}else if(nacionalidade === "colombiana"||"colombiano"){
    console.log("sua nacionalidade é",nacionalidade)
}else{
    console.log("nacionalidade não encontrada")
}
}
suaNacionalidade(nacionalidade)
