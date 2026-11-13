import AntesDepois from './components/AntesDepois'
import Contato from './components/Contato'
import Cursos from './components/Cursos'
import Depoimentos from './components/Depoimentos'
import Espaco from './components/Espaco'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Promocao from './components/Promocao'
import Resultados from './components/Resultados'
import Rodape from './components/Rodape'
import Servicos from './components/Servicos'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Promocao />
        <Resultados />
        <AntesDepois />
        <Depoimentos />
        <Servicos />
        <Espaco />
        <Contato />
        <Cursos />
      </main>
      <Rodape />
    </>
  )
}
