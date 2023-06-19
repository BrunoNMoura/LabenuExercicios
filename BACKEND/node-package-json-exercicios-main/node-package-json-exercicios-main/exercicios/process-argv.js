// const meuArgumento = process.argv [2]


// console.log(meuArgumento);
//----------------------exercício 3A cara e coroa---------------------------------
// const myOption = process.argv[2]
// console.clear()
// console.log("\n")
// console.log("--------------------------------------------------------")
// if (myOption && (myOption.toLowerCase() === 'cara' || myOption.toLowerCase() === 'coroa')) {

//   const prizeDraw = Math.floor(Math.random() * 101) % 2 === 0 ? "cara" : "coroa"

//   console.log(`deu ${prizeDraw} e você escolheu ${myOption}, você`,
//    myOption === prizeDraw ? "Ganhou!" : "Perdeu!")

// } else {
//   console.log("escolha cara ou corora!")
// }
// console.log("--------------------------------------------------------")
// console.log("\n")

//============exercício 3B par ou immpar======================

// let myOption = process.argv[2]
// let myNumber = process.argv[3]
// let cpOption = null
// let cpNumber = 0

// console.clear()

// const isEven = () => {
//   return (myNumber + cpNumber) % 2 === 0 
// }

// if (myOption && myNumber && +myNumber &&
//   (myOption.toLowerCase() === "par" || myOption.toLowerCase() === "impar")) {

//   myOption = myOption.toLowerCase()
//   myNumber = +myNumber

//   if (myOption === 'par') {
//     cpOption = "impar"
//   } else {
//     cpOption = "par"
//   }

//   cpNumber = Math.floor(Math.random() * 6)

//   console.log(`\n`)
//   console.log('---------------------------------------------------------------------------------------')
//   if (isEven()) {
//     if (myOption === "par") {
//       console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${myNumber + cpNumber}. Você ganhou!`)
//     } else {
//       console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${myNumber + cpNumber}. Você perdeu!`)
//     }
//   } else {
//     if (myOption === "impar") {
//       console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${myNumber + cpNumber}. Você ganhou!`)
//     } else {
//       console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${myNumber + cpNumber}. Você perdeu!`)
//     }
//   }
//   console.log('---------------------------------------------------------------------------------------')

// } else {
//   console.log("informe sua escolha (par ou impar) e um número")
// }

//==============exercício 3C pedra papel tesoura===================

let myOption = process.argv[2]
const options = ["pedra", "papel","tesoura","papel","tesoura","pedra"]
const cpOption = options[Math.floor(Math.random() * 6)]

console.clear()

const validOption = (option) => {
  return (options.filter((opt) => opt === option.toLowerCase())).length > 0
}

console.log("\n")
console.log("-----------------------------------------------------------------------")
if (myOption && validOption(myOption)) {
  if (myOption === cpOption) {
    console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Empate!"`)
  } else if (myOption === 'pedra' && cpOption==='tesoura') {
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você ganhou!"`)
  } else if (myOption=="tesoura" && cpOption==='papel'){
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você ganhou!"`)
  } else if (myOption=="papel" && cpOption==='pedra'){
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você ganhou!"`)
  } else {  
      console.log(`Você escolheu ${myOption} e o computador escolheu ${cpOption}. Você Perdeu!"`)
  }
} else {
  console.log("informe sua escolha: pedra, papel ou tesoura")
}

console.log("-----------------------------------------------------------------------")
console.log("\n")