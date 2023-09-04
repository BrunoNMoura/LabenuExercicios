import { ZodError } from "zod"
import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginSchema } from "../../src/dtos/user/login.dto"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve gerar um token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano123"
    })

    const output = await userBusiness.login(input)

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano"
    })
  })
  test("email deve ser uma string", async () => {
    expect.assertions(2)
    try {
      const input = LoginSchema.parse({
        email: 1234,
        password: "fulano123"
      })
  
      const output = await userBusiness.login(input)
    
    } catch (error) {
      expect(error).toBeDefined()
      expect(error).toBeInstanceOf(ZodError)
    }    
  })
  test("email não encontrado", async () => {
    expect.assertions(2)
    try {
      const input = LoginSchema.parse({
        email: "naoEncontrado@email.com",
        password: "fulano123"
      })
  
      const output = await userBusiness.login(input)
    
    } catch (error) {
     
      if(error instanceof BaseError){
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("'email' não encontrado")
      }
    }    
  })

})
