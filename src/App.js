import React, { useState } from 'react';
import './App.css';
import Pesquisar from './Containers/Pesquisar';
import Resultados from './Containers/Resultados';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';
const App = (props) => {

  const [changePage, setChangePage] = useState("PESQUISA");

  const navigationBtn = (changePage) => { 
    console.log(`Navegando para a tela:${changePage}`)
    setChangePage(changePage);
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
          <br />
          <button className='btn btn-danger btn-lg' onClick={ navigationBtn }>Próxima Página</button>
          {changePage === "PESQUISA" ? <Pesquisar navigationBtn={ navigationBtn } /> : null}
          {changePage === "RESULTADO"? <Resultados result={props.result} navigationBtn={ navigationBtn } /> : null}
          {changePage === "ERRO" ? <Erro errorMessage="Não foi possível realizar a consulta desejada, tente mais tarde" navigationBtn={ navigationBtn } /> : null}
          {changePage === "CARREGANDO" ? <Carregando navigationBtn={ navigationBtn } /> : null}
      </header>
    </div>
    </>
  );
}
export default App;
