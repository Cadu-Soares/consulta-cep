import React from 'react';

 const Pesquisar = (props) => {
  

  return (
    <div className="App">
        <div className="container">
          <header className="App-header">
            <p>
              Digite o CEP: 
            </p>
            <input type='number' placeholder='CEP' />
            <br />
            <button type="button" className="btn btn-primary btn-lg">Consultar</button> 
          </header>
        </div>
    </div>
  );
}

export default Pesquisar;