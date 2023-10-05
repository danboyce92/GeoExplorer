import DataBlock from "./DataBlock"
import DataFlag from "./DataFlag"
import GoogleMaps from "./GoogleMaps"
import NewSearch from "./NewSearch"
import { FaChevronDown } from "react-icons/fa";

const DataDisplay = () => {
  return (
    <div id="data-display">
      <NewSearch />
      <DataBlock />
      <GoogleMaps />
      <DataFlag />
      <div id="scroll-msg">
        <p id="scroll">Scroll Down</p>
        <FaChevronDown size={32} />
      </div>
    </div>
  )
}

export default DataDisplay