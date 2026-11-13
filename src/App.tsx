import AntesDepois from './components/AntesDepois'
import Capitulos from './components/Capitulos'
import Contato from './components/Contato'
import Cursos from './components/Cursos'
import Espaco from './components/Espaco'
import FaixaTexto from './components/FaixaTexto'
import Hero from './components/Hero'
import Mural from './components/Mural'
import Nav from './components/Nav'
import Promocao from './components/Promocao'
import Numeros from './components/Numeros'
import Resultados from './components/Resultados'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Promocao />
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
