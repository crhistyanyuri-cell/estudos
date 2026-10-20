import { use, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from '../src/componentes/Cabecalho'

function DigitarNome(){
    const [nome, setNome] = useState("")

    return(
        <div>
            <Cabecalho></Cabecalho>
            <input type="text" placeholder='Digite seu nome:'
            value={nome} onChange={(evento) => setNome(evento.target.value)}/>
            <button onClick={() =>{
                if(nome.trim() !==''){
                    setNome([...nome])
                    setNome('')
                }
            }}></button>
        </div>
    )
}
import Cabecalho from '../src/componentes/Cabecalho'