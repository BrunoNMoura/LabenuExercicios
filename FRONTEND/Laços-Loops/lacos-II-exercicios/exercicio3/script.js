// for([index, value] of maioresPaises.entries()) {
    //     console.log(`${index + 1} - ${value}`)
    // }


    bimestre1 = [8,4,2,7,3]
    bimestre2 = [2,9,10,7,5]
    bimestre3 = [10,10,8,9,10]
    bimestre4 = [5,8,6,9,10]

    const notasDoAno = [bimestre1,bimestre2, bimestre3,bimestre4]

    for (indice in notasDoAno){
        let somaNotas = 0
        let mediaBimestre = 0
        
        console.log('bimestre', Number(indice)+1)
        
        for(element of notasDoAno[indice]){
            somaNotas += element
            mediaBimestre = somaNotas / notasDoAno [indice]. length
            
        }
        console.log('soma Notas',somaNotas)
        console.log('Média Bimestre',mediaBimestre)
    }