import React, { useState } from 'react';
import './App.css';
import Pesquisar from './Containers/Pesquisar';
import Resultados from './Containers/Resultados';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';

const App = (props) => {

  const [changePage, setChangePage] = useState("PESQUISA");

  const [resultado, setResultado] = useState({});

  const [errorMessage, setErrorMessage] = useState('');

  const navigationBtn = (changePage) => { 
    console.log(`Navegando para a tela:${changePage}`)
    setChangePage(changePage);
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
          <br />
          {changePage === "PESQUISA" ? <Pesquisar navigationBtn={ navigationBtn } setResultado={setResultado} /> : null}
          {changePage === "RESULTADO"? <Resultados result={resultado} navigationBtn={ navigationBtn } /> : null}
          {changePage === "ERRO" ? <Erro errorMessage={errorMessage} navigationBtn={ navigationBtn } /> : null}
          {changePage === "CARREGANDO" ? <Carregando navigationBtn={ navigationBtn } /> : null}
      </header>
    </div>
    </>
  );
}
export default App;
