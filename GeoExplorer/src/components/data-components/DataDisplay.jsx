import DataBlock from "./DataBlock"
import DataFlag from "./DataFlag"
import GoogleMaps from "./GoogleMaps"
import NewSearch from "./NewSearch"


const DataDisplay = () => {
  return (
    <div id="data-display">
      <NewSearch />
      <DataBlock />
      <GoogleMaps />
      <DataFlag />
      <p id="scroll">Scroll Down</p>
    </div>
  )
}

export default DataDisplay