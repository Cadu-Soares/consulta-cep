import React from 'react';

const Carregando = (props) => {
  return (

      <header className="App-header">
        <p>
          Carregando Resultados...
        </p>
        <br />
        <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("PESQUISA")}>CANCELAR</button> 
      </header>
  );
}

export default Carregando;
