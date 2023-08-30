import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { UserBusiness } from "../../src/business/UserBusiness";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto";
import { USER_ROLES } from "../../src/models/User";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("Testes de login", () => {
  test("caso de sucesso", async () => {
    const input: GetUsersInputDTO = {
      q: "",
      token: "token-mock-astrodev",
    };

    const output = await userBusiness.getUsers(input);
    expect(output).toHaveLength(2);
    expect(output).toContainEqual({
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.ADMIN,
    });
  });
});
