// SPA: single page application
// sempre é chamada em todas as conexões
// e em caso de uma variavel opcional alterar na LISTA []
import { useEffect } from "react"


export default function Home() {
  useEffect(()=>{
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
  },[]) // incluir a variavel na lista []
 
   return (
     <div>
       <h1>Index</h1>
       <p>{JSON.stringify(props.episodes)}</p>
     </div>
   )
 }
 
 