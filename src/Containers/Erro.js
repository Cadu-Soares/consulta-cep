import React from 'react';
import Pesquisar from './Pesquisar';


export const Erro = (props) => {
  const navigationBtn = props.navigationBtn;

  return (
    <header className="App-header">
      <p>
        Erro na consulta
      </p>
      <br />
      <p>{props.errorMessage}</p>
      <b />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => navigationBtn("PESQUISA")}>CONSULTAR</button> 
    </header>
  );
}

export default Erro;