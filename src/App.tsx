import React, { useState } from 'react';
import './sas.css';

function App() {
  // Estado inicial com usuários e seus textos
  const [users, setUsers] = useState([
    { id: 1, name: 'Usuário A', text: 'Este é o texto do usuário A.', votes: 0, hasVoted: false },
    { id: 2, name: 'Usuário B', text: 'Texto do usuário B aqui.', votes: 0, hasVoted: false },
    { id: 3, name: 'Usuário C', text: 'Conteúdo escrito por usuário C.', votes: 0, hasVoted: false },
  ]);

  // Função para votar em um texto
  const voteForUser = (id) => {
    setUsers(users.map(user => 
      user.id === id && !user.hasVoted 
        ? { ...user, votes: user.votes + 1, hasVoted: true }
        : user
    ));
  };

  return (
    <div className="container">
      <h1>Votação de Textos</h1>

      {users.map((user) => (
        <div key={user.id} className="user-item">
          <h3>{user.name}</h3>
          <p>{user.text}</p>
          <div className="vote-info">
            <span>{user.votes} voto(s)</span>
            <button 
              onClick={() => voteForUser(user.id)} 
              disabled={user.hasVoted}
              className={user.hasVoted ? 'voted' : 'vote-button'}
            >
              {user.hasVoted ? 'Votado' : 'Votar'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
