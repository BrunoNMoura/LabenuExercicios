import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    title: "Bananinha",
    description: "Fruta cheia de potássio",
    price: 7,
    thumbnail: "url-bananinha.jpg",
  },
};
describe("testando productCard", () => {
  beforeEach(() => {
    axios.mockReset(); //resetando meu mock
  });
  test("Deve renderizar o ProductCard", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<ProductCard />);
    screen.logTestingPlaygroundURL();
    //entender o ciclo de vida da aplicação
    await waitFor(() => {});
    screen.logTestingPlaygroundURL();
  });
  test("Deve renderizar o loading do ProductCard", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<ProductCard />);
    const loading = screen.getByText(/loading\.\.\./i);
    expect(loading).toBeInTheDocument();
    const text = screen.queryByText("bananinha");
    expect(text).not.toBeInTheDocument();
    await waitFor(() => {});
    screen.logTestingPlaygroundURL();
  });
  test("Deve renderizar o título, a imagem e o preço do ProductCard", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<ProductCard />);

    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: /bananinha/i,
      });
      const img = screen.getByRole("img", {
        name: /thumbnail for bananinha/i,
      });
      const price = screen.getByText(/\$7/i);
      const description = screen.getByText(/fruta cheia de potássio/i);
      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });

    const loading = screen.queryByText(/loading\.\.\./i);
    expect(loading).not.toBeInTheDocument();
   
    expect(await screen.findByText("Bananinha")).toBeInTheDocument()

    screen.logTestingPlaygroundURL();
  });
});
