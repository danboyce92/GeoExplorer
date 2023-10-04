import NewSearch from "./NewSearch"


const DataDisplay = () => {
  return (
    <div id="data-display">
      <form id="new-search"><NewSearch /></form>
      <div id="data">Data</div>
      <div id="g-m">Show me GM</div>
      <div id="flag">Flag</div>
    </div>
  )
}

export default DataDisplay