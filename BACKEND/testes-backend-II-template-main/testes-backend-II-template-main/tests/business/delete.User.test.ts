import { UserBusiness } from "../../src/business/UserBusiness";
import { DeleteUserInputDTO } from "../../src/dtos/user/deleteUser.dto";
import { BadRequestError } from "../../src/errors/BadRequestError";
import { NotFoundError } from "../../src/errors/NotFoundError";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("testando deleteUser", () => {
  test("deve retornar a mensagem token inválido", async () => {
    try {
      const input: DeleteUserInputDTO = {
        idToDelete: "id-mock-fulano",
        token: "xxxxxxx",
      };
      await userBusiness.deleteUser(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toEqual("token incorrect");
      }
    }
  });

  test("deve retornar a mensagem somente admins podem acessar", async () => {
    try {
      const input: DeleteUserInputDTO = {
        idToDelete: "id-mock-fulano",
        token: "token-mock-fulano",
      };
      await userBusiness.deleteUser(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toEqual("only admins can access");
      }
    }
  });

  test("deve retornar a mensagem 'id' não encontrado.", async () => {
    try {
      const input: DeleteUserInputDTO = {
        idToDelete: "id-nao-cadastrado",
        token: "token-mock-astrodev",
      };
      await userBusiness.deleteUser(input);
    } catch (error) {
      if (error instanceof NotFoundError) {
        expect(error.message).toEqual("User not found");
      }
    }
  });
  test("deve retornar a mensagem usuário deletado com sucesso.", async () => {
    const input: DeleteUserInputDTO = {
      idToDelete: "id-mock-fulano",
      token: "token-mock-astrodev",
    };
    const result = await userBusiness.deleteUser(input);
    expect(result.message).toEqual("User deleted successfully");
  });
});
