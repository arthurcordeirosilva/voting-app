import { useState } from 'react';
import './App.css';

function App() {
  // Estado inicial com alguns itens e seus votos
  const [items, setItems] = useState([
    { id: 1, name: 'Item A', votes: 10 },
    { id: 2, name: 'Item B', votes: 5 },
    { id: 3, name: 'Item C', votes: 15 },
  ]);

  // Calcula o total de votos
  const totalVotes = items.reduce((total, item) => total + item.votes, 0);

  return (
    <div className="container">
      <h1 className="title">Resultado de Votação</h1>

      {items.map((item) => {
        const percentage = totalVotes > 0 ? ((item.votes / totalVotes) * 100).toFixed(2) : 0;

        return (
          <div key={item.id} className="item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-votes">{item.votes} votos</span>
            </div>
            <div className="item-percentage">
              <span>{percentage}%</span>
            </div>
          </div>
        );
      })}

      <p className="total-votes">Total de votos: {totalVotes}</p>
    </div>
  );
}

export default App;
