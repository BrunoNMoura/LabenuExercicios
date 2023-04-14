import Header from "../components/Headers";
import { MainContainer} from "../styles";

function ErrorPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Página não encontrada</h1>
    </MainContainer>
  );
}

export default ErrorPage;
