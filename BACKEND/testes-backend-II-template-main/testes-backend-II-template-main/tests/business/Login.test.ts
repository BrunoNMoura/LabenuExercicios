import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import { UserBusiness } from "../../src/business/UserBusiness"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { LoginInputDTO } from "../../src/dtos/user/login.dto"

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()

)

describe ("Testes de login",()=>{
    test("caso de sucesso", async ()=>{

        const input: LoginInputDTO = {
            email: "fulano@email.com",
            password: "fulano123"
        }

        const output = await userBusiness.login(input)

        // expect(output.token).toBeDefined()
        // expect(output.message).toBe("Login realizado com sucesso")
        expect(output).toEqual({
            message:"Login realizado com sucesso",
            token:"token-mock-fulano"
        })
    })
})