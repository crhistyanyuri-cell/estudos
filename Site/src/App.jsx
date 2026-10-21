import { useState } from 'react'
import './App.css'


import Usuarios from './pages/usuarios'
import Cabecalho from '../../Componentes/Header/Header'


function App() {
  const [pagina, setPagina] = useState ('')
  return(
    <div>
      <h1>Bem vindo</h1>
      <button onClick={() => setPagina('Cabeçalho')}>
        Pagina1
      </button>
      <button onClick={() => setPagina('Usuarios')}>
        Pagina2
      </button>

      {pagina == 'Cabeçalho' && <Cabecalho></Cabecalho>}
      {pagina == 'Usuarios' && <Usuarios></Usuarios>}
    </div>
  )
}

export default App
