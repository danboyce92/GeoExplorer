import PropTypes from 'prop-types';

const DataBlock = ({ name, capital, pop, cur, lang, cont }) => {
  return (
    <div id="data">
      <h1 id="country">{name}</h1>
      <div id="data-grid">
        <span id="cap">Capital</span>
        <p id="cap-dat">{capital}</p>
        <span id="pop">Population</span>
        <p id="pop-dat">{pop}</p>
        <span id="cur">Currency</span>
        <p id="cur-dat">{Object.keys(cur)[0]}</p>
        <span id="lang">Language(s)</span>
        <p id="lan-dat">{Object.values(lang)[0]}</p>
        <span id="cont">Continent</span>
        <p id="con-dat">{cont}</p>
      </div>
    </div>
  )
}

DataBlock.propTypes = {
  name: PropTypes.string,
  capital: PropTypes.string,
  pop: PropTypes.string,
  cur: PropTypes.object,
  lang: PropTypes.object,
  cont: PropTypes.string,
}

export default DataBlock
