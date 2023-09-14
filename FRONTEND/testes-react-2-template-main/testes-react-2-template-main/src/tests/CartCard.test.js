import { render, screen } from "@testing-library/react";
import CartCard from "../components/Cart/CartCard";
import userEvent from "@testing-library/user-event";

const productMock = {
  id: "prod001",
  title: "Produto Legal",
  price: 100,
  quantity: 1,
  image:
    "https://fastly.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0",
};

const removeToCartMock = jest.fn();

describe("Testando CartCard", () => {
  it("Deve renderizar a imagem, o titulo, o preço, a quantidade e o botão de romover", () => {
    render(
      <CartCard product={productMock} removeFromCart={removeToCartMock} />
    );
    const title = screen.getByRole("heading", {
      name: /produto legal/i,
    });
    const image = screen.getByRole("img", {
      name: /produto legal/i,
    });
    const price = screen.getByText(/\$100\.00/i);
    const quantity = screen.getByText(/x1/i);
    const buttonDel = screen.getByRole("button", {
      name: /remove/i,
    });
    expect(title).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonDel).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
  test("Deve disparar função removeCard quando clicado", async () => {
    const user = userEvent.setup();
    render(
      <CartCard product={productMock} removeFromCart={removeToCartMock} />
    );
    const buttonDel = screen.getByRole("button", {
      name: /remove/i,
    });
    await user.click(buttonDel);
    expect(removeToCartMock).toHaveBeenCalled();
    expect(removeToCartMock).toHaveBeenCalledTimes(1);
    expect(removeToCartMock).toReturn();
    expect(removeToCartMock).toHaveBeenCalledWith(productMock);
  });
});
