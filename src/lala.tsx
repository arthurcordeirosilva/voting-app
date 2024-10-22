
import './App.css';
import './input.css'; // Importa o arquivo de estilos
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <p>Cadastrar opção</p>

        <input
          type="text"
          placeholder="Digite algo"
          className="custom-input"
        />
        <div>
          <button onClick={() => alert('Primeiro botão clicado')}>Cadastrar</button>
          <button onClick={() => alert('Segundo botão clicado')}>Cancelar</button>
       
        </div>
      </div>
    </>
  );
}

export default App;