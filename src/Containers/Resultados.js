import '../Styles/Resultado.css'

const Resultados = (props) => {

  const keys = Object.keys(props.result);
  
  const tableHead = keys.map(key => (
    <th key={key}><b>{key}</b></th>
  ));

  const tableData = keys.map(key =>(
    <td>{props.result[key]}</td>
  ));

  return (
    <header className="App-header">
      <p>
        Resultados para o CEP: {props.result.cep}
      </p>
      <br />
      <div className='table-resul'>
        <table>
          <thead>
              <tr>
                {tableHead}
                {/* {elements} */}
              </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
        </div>
      <br />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => props.navigationBtn("PESQUISA")}>CONSULTAR</button> 
    </header>
  );
}

export default Resultados