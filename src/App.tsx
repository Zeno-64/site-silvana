import AntesDepois from './components/AntesDepois'
import Capitulos from './components/Capitulos'
import Contato from './components/Contato'
import Cursor from './components/Cursor'
import Cursos from './components/Cursos'
import Espaco from './components/Espaco'
import FaixaTexto from './components/FaixaTexto'
import Hero from './components/Hero'
import Mural from './components/Mural'
import Nav from './components/Nav'
import Numeros from './components/Numeros'
import Resultados from './components/Resultados'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <FaixaTexto />
        <Capitulos />
        <Resultados />
        <AntesDepois />
        <Numeros />
        <Espaco />
        <Cursos />
        <Mural />
        <Contato />
      </main>
    </>
  )
}
