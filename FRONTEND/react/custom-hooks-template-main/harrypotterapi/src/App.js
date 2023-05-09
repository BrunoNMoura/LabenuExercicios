import { useRequestData } from "./hooks/useRequestData";
import "./styles.css";
import { BASE_URL } from "./constants/Constants";
import { DetailCharacters } from "./components/details/Details";
import { useState } from "react";

export default function App() {
  const [characters, isLoading, errorChar] = useRequestData(BASE_URL);
  const [isDetail, setIsDetail] = useState(false);
  const [char, setChar] = useState([]);

  // habilita a abertura dos detalhes
  // e separa os dados do personagem selecionado
  function detailChar(char) {
    setIsDetail(true);
    setChar(char);
  }

  return (
    <>
      <header>
        <h1>Personagens de Harry Potter</h1>
      </header>

      <div className="ContainerChar">
        {isLoading && (
          <img
            className="LoadingAnimate"
            src={"https://i.gifer.com/XVo6.gif"}
          />
        )}
        {!isLoading &&
          !errorChar &&
          characters
            .filter((char) => char.image.length > 0)
            .map((char, index) => (
              <div key={index} className="BoxChar">
                <p className="TitleChar">{char.name}</p>
                <img onClick={() => detailChar(char)} src={char.image} />
                <p>Ator: {char.actor}</p>
              </div>
            ))}
        {errorChar && <h1>ops! ocorreu um erro.....</h1>}
      </div>
      {isDetail && <DetailCharacters char={char} setIsDetail={setIsDetail} />}
    </>
  );
}
