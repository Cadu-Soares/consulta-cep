import React, { useState } from 'react';

 const Pesquisar = (props) => {
  
  const [searchCep, setSearchCep] = useState("");

  const numbersOnly = (stg) => {
    return stg.replace(/[^\d]/g, '')
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchCep(numbersOnly(value))
  }

  
  return (
    <>
      <header className="App-header">
        <p>
          Digite o CEP: 
        </p>
        <input type='number' placeholder='CEP' value={numbersOnly(searchCep)}  onChange={handleChange} />
        <br />
        <p>Estado atual: {searchCep}</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("RESULTADO") }>Consultar</button> 
      </header>
    </>
  );
}

export default Pesquisar;