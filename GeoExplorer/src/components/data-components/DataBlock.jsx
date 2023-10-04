

const DataBlock = () => {
  return (
    <div id="data">
      <h1 id="country">Ireland</h1>
      <div id="data-grid">
        <div id="legend-container">
          <p className="legend">Capital:</p>
          <p className="legend">Population:</p>
          <p className="legend">Currency:</p>
          <p className="legend">Language:</p>
          <p className="legend">Continent:</p>
        </div>
        <div id="data-container">
          <p className="datapoint">Ireland</p>
          <p className="datapoint">4994724</p>
          <p className="datapoint">Eur</p>
          <p className="datapoint">English</p>
          <p className="datapoint">Europe</p>
        </div>
      </div>
    </div>
  )
}

export default DataBlock