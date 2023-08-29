import { pratica3 } from "../src/pratica3"

describe ("Função praticas3",()=>{
    test("Deve retornar null caso os parametros sejam do tipo diferente de number",()=>{
        expect(pratica3("abc"as any,"rodrigo" as any)).toBe(null)
    })
    test("Deve retornar um objeto contendo a soma e a multiplicação de dois números", ()=>{
        expect(pratica3(3,5)).toEqual({soma:8, multiplicacao:15})
    })
})