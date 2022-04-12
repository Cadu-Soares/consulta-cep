import React, { useState, useRef } from 'react';
import './App.css';
import Pesquisar from './Containers/Pesquisar';
import Resultados from './Containers/Resultados';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = (props) => {

  
  const [resultado, setResultado] = useState({});

  // -- Tratamento do erro na consulta -- //
  const [errorMessage, setErrorMessage] = useState('');


  // -- Lógica de Navegação entre as telas -- //
  const [changePage, setChangePage] = useState("PESQUISA");

  const navigationBtn = (changePage) => { 
    console.log(`Navegando para a tela:${changePage}`)
    setChangePage(changePage);
  }
  
  // -- Tratamento da Tela de Carregamento --- //
  const ticket = useRef(1);

  return (
    <>
    <div className="App">
    <main>
      <Header />
            {changePage === "PESQUISA" ? <Pesquisar navigationBtn={ navigationBtn } setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket} /> : null}
            {changePage === "RESULTADO"? <Resultados result={resultado} navigationBtn={ navigationBtn } /> : null}
            {changePage === "ERRO" ? <Erro errorMessage={errorMessage} navigationBtn={ navigationBtn } /> : null}
            {changePage === "CARREGANDO" ? <Carregando navigationBtn={ navigationBtn } ticket={ticket} /> : null}
        <Footer />
      </main>
    </div>
    </>
  );
}
export default App;
