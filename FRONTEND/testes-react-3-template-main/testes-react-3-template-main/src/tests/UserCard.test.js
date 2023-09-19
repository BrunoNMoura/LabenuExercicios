import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserCard from "../components/UserCard";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    firstName: "Bruno",
    lastName: "Moura",
    bank: {
      cardNumber: "1234567891234567",
      cardExpire: "10/23",
    },
  },
};
describe("Testando UserCard", () => {
  beforeEach(() => {
    axios.mockReset(); //resetando meu mock
  });
  test("Deve renderizar o loading do UserCard ", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<UserCard />);
    const loading = screen.getByText(/loading\.\.\./i);
    expect(loading).toBeInTheDocument();
    const text = screen.queryByText("Bruno");
    expect(text).not.toBeInTheDocument();
    await waitFor(() => {});
    screen.logTestingPlaygroundURL();
  });
  test("Deve renderizar o nome, sobrenome, número de cartão e data de validade do UserCard ", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<UserCard />);
    await waitFor(() => {});
    const name = screen.getByText(/bruno moura/i);

    const numberCard = screen.getByText(/1234 5678 9123 4567/i);

    const experiesCard = screen.getByText(/10\/23/i);

    expect(name).toBeInTheDocument()
    expect(numberCard).toBeInTheDocument()
    expect(experiesCard).toBeInTheDocument()

    screen.logTestingPlaygroundURL();
  });
});
