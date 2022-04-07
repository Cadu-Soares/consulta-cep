import React from 'react';

const Carregando = (props) => {

  // -- Tratamento do botão de cancelamento --- //
  const handleCancel = () => {
    props.ticket.current++;
    props.navigationBtn("PESQUISA")
  }

  return (

      <header className="App-header">
        <p>
          Carregando Resultados...
        </p>
        <br />
        <button type="button" className="btn btn-primary btn-lg" onClick={handleCancel}>CANCELAR</button> 
      </header>
  );
}

export default Carregando;
