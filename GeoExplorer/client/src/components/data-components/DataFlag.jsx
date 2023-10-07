import PropTypes from 'prop-types';

const DataFlag = ({ flag, coatArms }) => {




  return (
    <div id="data-flag">
      <img id="flag-obj" src={`${flag}`} />
      <img id="coat-arms" src={`${coatArms}`} />
    </div>
  )
}

DataFlag.propTypes = {
  flag: PropTypes.string,
  coatArms: PropTypes.string,
}

export default DataFlag