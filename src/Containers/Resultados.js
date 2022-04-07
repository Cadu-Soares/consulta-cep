import React from 'react';

const Resultados = (props) => {

  const result = props.result;
  const keys = Object.keys(result);
  const elements = keys.map(key => (
    <span key={key}><b>{key}:</b>{result[key]}</span>
  ))

  return (
    <header className="App-header">
      <p>
        Resultados para o CEP: {result.cep}
      </p>
      <br />
      {elements}
      <br />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("PESQUISA")}>CONSULTAR</button> 
    </header>
  );
}

export default Resultados