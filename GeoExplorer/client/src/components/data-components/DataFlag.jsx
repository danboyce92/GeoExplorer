import PropTypes from 'prop-types';

const DataFlag = ({ flag, coatArms }) => {




  return (
    <div id="data-flag">
      <img id="flag-obj" src={`${flag}`} />
      {/* <object id="flag-obj" data={`${flag}`} target="image/svg+xml" size={200}></object> */}
      {/* <iframe name="svg-iframe" width="200" height="200" src={`${flag}`}></iframe> */}
      {/* <button id="flag-button">Reveal Flag</button> */}
      <img id="coat-arms" src={`${coatArms}`} />
    
    </div>
  )
}

DataFlag.propTypes = {
  flag: PropTypes.string,
  coatArms: PropTypes.string,
}

export default DataFlag