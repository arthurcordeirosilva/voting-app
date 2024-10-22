import { useEffect, useState } from 'react';
import '../App.css';
import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';

interface Vote {
  optionId: string
  optionName: string
  voteCount: number
}

interface VotingResultResponse {
  votes: Vote[]
  totalVotes: number
}

export function VotingResultPage() {

  const navigate = useNavigate()

  // Estado inicial com alguns itens e seus votos
  const [items, setItems] = useState<Vote[]>([]);
  const [totalVotes, setTotalVotes] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api.get<VotingResultResponse>("/voting/metrics")
    .then(response => {
      setItems(response.data.votes)
      setTotalVotes(response.data.totalVotes)
    })
    .catch(error => {
      console.error("> erro buscar métricas", error);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="container">
      <h1 className="title">Resultado de Votação</h1>

      {totalVotes != null && items.length > 0 && items.map((item) => {
        const percentage = totalVotes > 0 ? ((item.voteCount / totalVotes) * 100).toFixed(2) : 0;

        return (
          <div key={item.optionId} className="item">
            <div className="item-info">
              <span className="item-name">{item.optionName}</span>
              <span className="item-votes">{item.voteCount} votos</span>
            </div>
            <div className="item-percentage">
              <span>{percentage}%</span>
            </div>
          </div>
        );
      })}
      <p className="total-votes">
    

        {
          isLoading ? "Carregando votos..." :
          items.length == 0 ? "Nenhum voto" : `Total de votos: ${totalVotes}`
        }
        </p>

      <button onClick={() => {
        navigate("/")
      }}>Realizar novo voto</button>
    </div>
  );
}

