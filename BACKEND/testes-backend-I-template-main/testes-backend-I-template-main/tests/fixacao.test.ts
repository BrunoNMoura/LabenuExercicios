import { fixacao } from "../src/fixacao"

describe ("Função fixação",()=>{
    test("Deve retornar uma string segmentada em letras",()=>{
        expect(fixacao("dev")).toEqual(["d","e","v"])
        expect(fixacao("bruno")).toEqual(["b","r","u","n","o"])
        expect(fixacao(123 as any)).toEqual(null)
    })
})