import React from 'react';


const Resultados = (props) => {

  const result = {
    rua: "Baronesa",
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };

  return (
    <header className="App-header">
      <p>
        Resultados para o CEP 21321-000
      </p>
      <br />
      <p>Resultados obtidos:</p>
      <span><b>RUA: {' '}</b>{result.rua}</span>
      <span><b>CIDADE: {' '}</b>{result.cidade}</span>
      <span><b>ESTADO: {' '}</b>{result.estado}</span>
      <br />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("PESQUISA")}>NOVA CONSULTA</button> 
    </header>
  );
}

export default Resultados