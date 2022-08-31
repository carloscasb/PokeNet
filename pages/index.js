import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* vamos fazer uma solicitação para buscar alguns Pokemons*/
export async function getStaticProps(){

  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`;

 /*  inicia uma solicitação e retorna uma promessa. Quando a solicitação for concluída, 
  a promessa será resolvida com o objeto Response (res) .   Se a solicitação falhar devido
   a alguns problemas de rede, a promessa será rejeitada.*/

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

   
 // add pokemon index
 data.results.forEach((item, index) => {
  item.id = index + 1;
});

return {
  props: {
    pokemons: data.results,
  },
};

}

export default function Home({pokemons}) {
  return (
    <div>
    <h1>PokeNext</h1>
<ul>
{pokemons.map((pokemon) => (
   <li key={pokemon.id}>{pokemon.name}</li>       
))}
</ul>
  </div>
  )
}
