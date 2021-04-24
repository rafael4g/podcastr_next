// SSR: server side rendering
// este formato a chamada a API fica na camada do back-end
// mesmo que o javascript esteja desabilidade
// porem sempre será chamada quando os clientes conectarem nesta rota

export default function Home(props) {
 console.log(props.episodes)

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    }
  }
}
