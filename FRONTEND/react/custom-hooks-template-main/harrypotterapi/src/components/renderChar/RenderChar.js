export function RenderChar(char, index) {
  return (
    <div key={index} className="BoxChar">
      <p className="TitleChar">{char.name}</p>
      <img onClick={() => detailChar(char)} src={char.image} />
      <p>Ator: {char.actor}</p>
    </div>
  );
}
