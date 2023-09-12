import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";
import userEvent from "@testing-library/user-event";

describe("Testando calculator", () => {
  test("deve redenrizar o sinal de mais", () => {
    render(<Calculator />);
    const adicao = screen.getByText("+");
    expect(adicao).toBeInTheDocument();
  });
  test("deve redenrizar o sinal de menos", () => {
    render(<Calculator />);
    const subtracao = screen.getByText("-");
    expect(subtracao).toBeInTheDocument();
  });
  test("deve redenrizar o sinal de dividir", () => {
    render(<Calculator />);
    const divisao = screen.getByText("/");
    expect(divisao).toBeInTheDocument();
  });
  test("deve redenrizar o sinal de vezes", () => {
    render(<Calculator />);
    const multiplicacao = screen.getByText("*");
    expect(multiplicacao).toBeInTheDocument();
  });
  test("deve aparecer 10 quando clicar no botão 2 depois * depois 5 e depois o sinal de =", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    const buttonDois = screen.getByRole("button", {
      name: "2",
    });
    const buttonVezes = screen.getByRole("button", {
      name: "*",
    });
    const buttonCinco = screen.getByRole("button", {
      name: "5",
    });
    const buttonIgual = screen.getByRole("button", {
      name: "=",
    });

    await user.click(buttonDois);
    await user.click(buttonVezes);
    await user.click(buttonCinco);
    await user.click(buttonIgual);

    const resultado = screen.getByTestId("display");
    expect(resultado).toHaveTextContent("10");
  });
  test("deve aparecer 20 quando clicar no botão 2 depois * depois 5 depois + depois 1 depois 0 e depois o sinal de =", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    const buttonDois = screen.getByRole("button", {
      name: "2",
    });
    const buttonVezes = screen.getByRole("button", {
      name: "*",
    });
    const buttonCinco = screen.getByRole("button", {
      name: "5",
    });
    const buttonMais = screen.getByRole("button", {
      name: "+",
    });
    const buttonUm = screen.getByRole("button", {
      name: "1",
    });
    const buttonZero = screen.getByRole("button", {
      name: "0",
    });
    const buttonIgual = screen.getByRole("button", {
      name: "=",
    });

    await user.click(buttonDois);
    await user.click(buttonVezes);
    await user.click(buttonCinco);
    await user.click(buttonMais);
    await user.click(buttonUm);
    await user.click(buttonZero);
    await user.click(buttonIgual);

    const resultado = screen.getByTestId("display");
    expect(resultado).toHaveTextContent("20");
  });
});
