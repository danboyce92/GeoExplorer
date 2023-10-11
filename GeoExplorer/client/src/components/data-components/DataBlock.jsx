import { useEffect } from 'react';
import PropTypes from 'prop-types';


const DataBlock = ({ countryInfo }) => {
  
  useEffect(() => {

  }, [])

  if (countryInfo.length > 0) {
    return (
      <div id="data">
      <h1 id="country">{countryInfo[0]}</h1>
      <div id="data-grid">
        <span id="cap">Capital :</span>
        <p id="cap-dat">{countryInfo[1]}</p>
        <span id="pop">Population :</span>
        <p id="pop-dat">{countryInfo[2]}</p>
        <span id="cur">Currency :</span>
        <p id="cur-dat">{Object.keys(countryInfo[3])[0]}</p>
        <span id="lang">Language(s) :</span>
        <p id="lan-dat">{Object.values(countryInfo[4])[0]}</p>
        <span id="cont">Continent :</span>
        <p id="con-dat">{countryInfo[5]}</p>
      </div>
    </div>
    )
  }

}

DataBlock.propTypes = {
  countryInfo: PropTypes.array,
  toggleLoading: PropTypes.func,
}

export default DataBlock;
