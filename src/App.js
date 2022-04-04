import React, { useState } from 'react';
import './App.css';
import Pesquisar from './Containers/Pesquisar';
import Resultados from './Containers/Resultados';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';
 
const App = (props) => {

  const [changePage, setChangePage] = useState(0);

  const handleClick = () => { 
    setChangePage((changePage + 1) % 4);
  }

  return (
    <>
        <button onClick={handleClick}>Próxima Página</button>
        {changePage == 0 ? <Pesquisar /> : null}
        {changePage == 1 ? <Resultados result={props.result} /> : null}
        {changePage == 2 ? <Erro errorMessage="Não foi possível realizar a consulta desejada, tente mais tarde" /> : null}
        {changePage == 3 ? <Carregando /> : null}
    </>
  );
}
export default App;
