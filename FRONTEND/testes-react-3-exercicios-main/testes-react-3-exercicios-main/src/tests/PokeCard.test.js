import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Pokecard from "../components/Pokecard";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    name: "Mewtwo",
    sprites: {
      front_default:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      id: "21",
    },
    types: [{ type: { name: "psychic" } }],
  },
};

const openModalMock = jest.fn();

describe("Testando PokeCard", () => {
  beforeEach(() => {
    axios.mockReset();
  });
  test("Deve renderizar o nome,a imagem, o Id e o tipo", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<Pokecard url={axiosResponseMock} openModal={openModalMock} />);
    await waitFor(() => {});
    const name = screen.getByText(/mewtwo/i);
    const sprites = screen.getByRole("img", {
      name: /mewtwo/i,
    });
    const types = screen.getByText(/psychic/i);

    expect(name).toBeInTheDocument();
    expect(sprites).toBeInTheDocument();
    expect(types).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
  test("Deve dispara a função openModal quando clicado", async () => {
    const user = userEvent.setup();
    axios.get.mockResolvedValueOnce(axiosResponseMock);
    render(<Pokecard url={axiosResponseMock} openModal={openModalMock} />);
    await waitFor(() => {});
    const openModalBtn = screen.getByRole("article");
    await user.click(openModalBtn);
    expect(openModalMock).toHaveBeenCalledTimes(1);
  });
});
