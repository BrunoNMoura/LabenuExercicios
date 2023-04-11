export function DetailCharacters(props) {
  console.log("uuu", props);
  return (
    <div className="DetailsChar">
      <p>{char.name} </p>
      <p>Espécie: {char.species ? char.species : "não informado!"}</p>
      <p>Gênero: {char.gender ? char.gender : "não informado!"}</p>
      <p>
        Côr dos Cabelos: {char.hairColour ? char.hairColour : "não informado!"}
      </p>
      <p>Côr dos Olhos: {char.eyeColour ? char.eyeColour : "não informado!"}</p>
      <p>Mágico: {char.wizar ? "Sim" : "Não"} </p>
      <p>Ator: {char.actor ? char.actor : "não informado!"}</p>
      <p>
        Data de Nascimento:
        {char.dateOfBirth ? char.dateOfBirth : "não informado!"}
      </p>
      <p>Vivo: {char.alive ? "sim" : "não"} </p>
    </div>
  );
}
