import { UserBusiness } from "../../src/business/UserBusiness";
import { GetUserByIdSchema } from "../../src/dtos/user/getUserById.dto";
import { BadRequestError } from "../../src/errors/BadRequestError";
import { USER_ROLES } from "../../src/models/User";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe ("Testando getUserById",() => {
    test ("deve retornar um usuário igual o modelo", async () => {
        const input = GetUserByIdSchema.parse({
            id: "id-mock-fulano",
            token:"token-mock-astrodev"
        })

        const output = await userBusiness.getUserById(input)

        expect(output).toEqual({
            id:"id-mock-fulano",
            name:"Fulano",
            email:"fulano@email.com",
            createdAt: expect.any(String),
            role:USER_ROLES.NORMAL
        })
    })

    test("deve retornar a mensagem token inválido",async () => {
        expect.assertions(1)
        try {
            const input = GetUserByIdSchema.parse({
                id: "id-mock-fulano",
                token:"token-falso"
            })
            const output = await userBusiness.getUserById(input)

        } catch (error) {
            if(error instanceof BadRequestError) {
                expect(error.message).toEqual("token inválido")
            }
        }
    })

    test("deve retornar a messagem id não encontrado", async ()=>{
        expect.assertions(1)
        try {
            const input = GetUserByIdSchema.parse ({
                id: "id-falso",
                token:"token-mock-fulano"
            })
            const output = await userBusiness.getUserById(input)
        } catch (error) {
            if (error instanceof BadRequestError){
                expect (error.message).toEqual("id não encontrado")
            }
        }
    })
})