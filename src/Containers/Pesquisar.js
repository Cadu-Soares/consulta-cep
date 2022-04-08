import React, { useState } from 'react';
import cep from 'cep-promise';

 // const numbersOnly = (stg) => {
  //   return stg.replace(/[^\d]/g, '')
  // };

const Pesquisar = (props) => {
  
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

    props.setResultado(resultado)
    props.navigationBtn("RESULTADO") 
  }

  // -- Tratamento do sucesso na busca --- //
  const handleSearch = () => {
    props.ticket.current++;
    const currentTicket = props.ticket.current
    props.navigationBtn("CARREGANDO") 
    cep(searchCep)
    .then(result => currentTicket === props.ticket.current && handleSuccess(result))
    .catch(err => currentTicket === props.ticket.current && handleError(err))
  }

// -- Tratamento do erro na busca --- //
  const handleError = (err) => {
    const errorMessage = err.message;
    props.setErrorMessage(errorMessage);
    props.navigationBtn("ERRO");
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
        <button type="button" className="btn btn-primary btn-lg" onClick={() => handleSearch()} >CONSULTAR</button> 
      </header>
    </>
  );
}

export default Pesquisar;