import Header from "../components/Header";
import { MainContainer} from "../style";

export default function ErrorPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Página não encontrada</h1>
    </MainContainer>
  );
}
