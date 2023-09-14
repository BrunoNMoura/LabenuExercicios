import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductsList/ProductCard";
import userEvent from "@testing-library/user-event";

const productMock = {
  id: "prod001",
  title: "Produto Legal",
  price: 100,
  image:
    "https://fastly.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0",
};
const addToCartMock = jest.fn();

describe("Testando product card", () => {
  it("deve renderizar o Product Card", () => {
    render(<ProductCard product={productMock} addToCard={addToCartMock} />);
    const title = screen.getByRole("heading", {
      name: /produto legal/i,
    });
    const price = screen.getByText(/\$100\.00/i);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
  it("deve renderizar o Product Card com title, image, price, buttonBuy", () => {
    render(<ProductCard product={productMock} addToCard={addToCartMock} />);
    const title = screen.getByRole("heading", {
      name: /produto legal/i,
    });
    const image = screen.getByRole("img", {
      name: /produto legal/i,
    });
    const price = screen.getByText(/\$100\.00/i);
    const buttonBuy = screen.getByRole("button", {
      name: /buy/i,
    });
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonBuy).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
  test("Deve disparar função addCard quando clicado", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);
    const buttonBuy = screen.getByRole("button", {
      name: /buy/i,
    });
    await user.click(buttonBuy);
    expect(addToCartMock).toHaveBeenCalled();
    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toReturn();
    expect(addToCartMock).toHaveBeenCalledWith(productMock);
  });
});
