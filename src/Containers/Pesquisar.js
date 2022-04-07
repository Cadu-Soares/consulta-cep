import React, { useState } from 'react';
import cep from 'cep-promise';

 // const numbersOnly = (stg) => {
  //   return stg.replace(/[^\d]/g, '')
  // };

const Pesquisar = (props) => {

  const setResultado = props.setResultado;

  const [searchCep, setSearchCep] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchCep(value)
  }

  const handleSuccess = (dadosCep) => {
    const resultado = {
      "Estado": dadosCep.state,
      "Cidade": dadosCep.city,
      "Bairro": dadosCep.neighborhood,
      "Logradouro": dadosCep.street
    }

    setResultado(resultado)
    props.navigationBtn("RESULTADO") 
  }

  const handleError = (err) => {
    const errorMessage = err.message;
    setErrorMessage(errorMessage);
    props.navigationBtn("ERRO") 
  }

  const handleSearch = () => {
    cep(searchCep)
    .then(handleSuccess)
    .catch(handleError)
  }


  return (
    <>
      <header className="App-header">
        <p>
          Digite o CEP que deseja consultar : 
        </p>
        <input type='number' placeholder='CEP' value={searchCep}  onChange={handleChange} />
        <br />
        <p>Estado atual: {searchCep}</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => handleSearch() }>Consultar</button> 
      </header>
    </>
  );
}

export default Pesquisar;