import AntesDepois from './components/AntesDepois'
import Contato from './components/Contato'
import Cursos from './components/Cursos'
import Espaco from './components/Espaco'
import Hero from './components/Hero'
import Mural from './components/Mural'
import Nav from './components/Nav'
import Promocao from './components/Promocao'
import Resultados from './components/Resultados'
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
        <Servicos />
        <Espaco />
        <Cursos />
        <Mural />
        <Contato />
      </main>
    </>
  )
}
