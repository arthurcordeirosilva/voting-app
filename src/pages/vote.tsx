import { useEffect, useState } from 'react';
import '../sas.css';
import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';

interface Option {
  id: string
  name: string
  votingId: string
}

interface VotingOptions {
  options: Option[]
}

export function Vote() {
  const navigate = useNavigate()

  // Estado inicial com usuários e seus textos
 /*  const [users, setUsers] = useState([
    { id: 1, name: 'Usuário A', text: 'Este é o texto do usuário A.', votes: 0, hasVoted: false },
    { id: 2, name: 'Usuário B', text: 'Texto do usuário B aqui.', votes: 0, hasVoted: false },
    { id: 3, name: 'Usuário C', text: 'Conteúdo escrito por usuário C.', votes: 0, hasVoted: false },
  ]); */
  const [options, setOptions] = useState<Option[]>([])
  const [userAlreadyVoted, setUserAlreadyVoted] = useState(false)

  // Função para votar em um texto
  const voteForUser = (id: string) => {
    console.log(id);
    

    api.post(`/vote/${id}`, {
      participantName: "Fulano"
    })
    .then(() => {
      setUserAlreadyVoted(true)
    })
  };

  useEffect(() => {
    api.get<VotingOptions>("/voting/options")
    .then(response => {
      setOptions(response.data.options)
    })
  }, [])

  return (
    <div className="container">
      <h1 className='title'>Votação</h1>

      {options.map((option) => (
        <div key={option.id} className="user-item">
          <h3>{option.name}</h3>
          <div className="vote-info">
            <button 
              onClick={() => voteForUser(option.id)} 
              disabled={userAlreadyVoted}
              className={userAlreadyVoted ? 'voted' : 'vote-button'}
            >
              {userAlreadyVoted ? 'Votado' : 'Votar'}
            </button>
          </div>
        </div>
      ))}

      <button onClick={() => {
        navigate("/voting-result")
      }}>Ver resultado</button>
    </div>
  );
}
