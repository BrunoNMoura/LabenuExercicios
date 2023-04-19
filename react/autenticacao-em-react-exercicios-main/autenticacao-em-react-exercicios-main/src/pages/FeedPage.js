import useProtectedPage from "../hooks/useProtected";
import useRequestData from "../hooks/useRequestData";

function FeedPage() {
  useProtectedPage()
  const token = localStorage.getItem('token')
  const headers = {
    headers:{
      Authorization: token
    }
  }

  const [posts] = useRequestData([],'/recipe/all',headers)

  return (
    <main>
      <h1>Página de Feed</h1>
      <section>
        <h3>Nova Receita</h3>
      </section>
    </main>
  );
}

export default FeedPage;