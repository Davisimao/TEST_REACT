import Card from "./components/Card"
import posterImg from "../assets/image.jpg"
import posterRotj from "../assets/rotj-poster.jpg"
import posterEsb from "../assets/esb-poster.jpg"


export default function App() {
  return (
    <>
      <Card title="Poster: Star Wars (1977)" img={posterImg} content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate est quam sed dolor recusandae sapiente facilis eum deleniti, incidunt atque." />
      <br />
      <Card title="Poster: Empire Strikes Back (1980)" img={posterRotj}
        content="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. 
      Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. 
      Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. 
      Não perca a chance de adicionar essa linda memória ao seu acervo!" />
      <br />
      <Card title="Poster: Teste Davi (2004) " content="Qhat can u du" img={posterEsb} />
    </>
  )
}