
import { useState } from 'react'
import Cabecalho from '../componentes/Cabecalho'

function Usuarios() {
  const [nome, setnome] = useState('')
  const [nomes, setnomes] = useState([])

  return (
    
    <div>
         <Cabecalho></Cabecalho>
      <h1>Teste de Usuarios</h1>
     
      

      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(evento) => setnome(evento.target.value)}
      />

      <button
        onClick={() => {
          if (nome.trim() !== '') {
            setnomes([...nomes, nome])
            setnome('')
          }
        }}
      >
        Adicionar
      </button>

      <h2>Lista</h2>

      <ul>
        {nomes.map((nome, indice) => (
          <li key={indice}>{nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Usuarios
