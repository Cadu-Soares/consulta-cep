import React from 'react';


export const Erro = (props) => {
  return (
      <div className="App">
          <div className="container">
            <header className="App-header">
              <p>
                Erro na consulta
              </p>
              <br />
              <p>{props.errorMessage}</p>
              <b />
              <button type="button" className="btn btn-primary btn-lg">CANCELAR</button> 
            </header>
          </div>
      </div>
    );
}

export default Erro;