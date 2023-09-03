import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { UserBusiness } from "../../src/business/UserBusiness";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { SignupInputDTO } from "../../src/dtos/user/signup.dto";

describe("Testes de signup", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );
  test("caso de sucesso", async () => {
    const input:SignupInputDTO = {
      name: "",
      email: "",
      password: "",
    };

    const output = await userBusiness.signup(input);

    expect(output).toEqual({
      message: "Cadastro realizado com sucesso",
      token: "token-mock",
    });
  });
});
