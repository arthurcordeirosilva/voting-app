// import '../App.css';
import { useState } from 'react';
import '../input.css'; // Importa o arquivo de estilos
import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';

export function RegisterOptionPage() {
  const navigate = useNavigate(); // Hook para navegação

  const [optionName, setOptionName] = useState("")

  const handleCreateOption = () => {
    if(!optionName) {
      return
    }

    api.post("/option", {
      name: optionName
    })
    .then(() => {
      alert("Opção cadastrada com sucesso")
      setOptionName("")
    })
  }

  return (
    <>
      <div className="container">
        <p>Cadastrar opção</p>

        <input
          type="text"
          placeholder="Digite algo"
          className="custom-input"
          onChange={(e) => {setOptionName(e.target.value)}}
          value={optionName}
        />
        
          <button onClick={handleCreateOption} className='button'>Cadastrar</button>
          <button onClick={() => {
              navigate('/voting-result');
          }} style={{
            marginTop: 12
          }}>Ver resultado da votação</button>

      </div>
    </>
  )
}