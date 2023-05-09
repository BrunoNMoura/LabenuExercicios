/* let idade 
let ensinoMedio 
let isCursandoOutraFaculdade
 */
const verificacao =(idade, ensinoMedio, isCursandoOutraFaculdade) => {

if(idade>=18){
    alert("maior de idade")
}else{
	alert("Menor de idade")
}

if(ensinoMedio){
    alert("é maior")
}else{
    alert("é menor")
}
if(isCursandoOutraFaculdade){
    alert("1ªgraduação")
}else{
    alert("não tem graduação")
}
}

verificacao (35, true, true)    