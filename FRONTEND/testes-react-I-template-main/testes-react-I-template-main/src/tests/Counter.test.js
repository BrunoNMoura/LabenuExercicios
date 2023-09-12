import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Testando Counter", () => {
  test("deve iniciar com o valor 0", () => {
    render(<Counter />);

    const value = screen.getByText("0");

    expect(value).toBeInTheDocument();
  });
  test("Deve aumentar em 3 o contador qaundo o botão de incremento for clicado 3 vezes", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    const value = screen.getByText("3");

    expect(value).toBeInTheDocument();
  });
});
