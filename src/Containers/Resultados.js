import React from 'react';


const Resultados = () => {

  const result = {
    rua: "Baronesa",
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };

  return (
    <div className="App">
        <div className="container">
          <header className="App-header">
            <p>
              Resultados para o CEP 21321-000
            </p>
            <br />
            <p>Resultados obtidos:</p>
            <span><b>RUA: {' '}</b>{result.rua}</span>
            <span><b>CIDADE: {' '}</b>{result.cidade}</span>
            <span><b>ESTADO: {' '}</b>{result.estado}</span>
            <button type="button" className="btn btn-primary btn-lg">NOVA CONSULTA</button> 
          </header>
        </div>
    </div>
  );
}

export default Resultados