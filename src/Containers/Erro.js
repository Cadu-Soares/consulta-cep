export const Erro = (props) => {
  
  return (
    <header className="App-header">
      <p>
        Erro na consulta
      </p>
      <br />
      <p>{props.errorMessage}</p>
      <b />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("PESQUISA")}>CONSULTAR</button> 
    </header>
  );
}

export default Erro;