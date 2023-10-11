import PropTypes from 'prop-types';

const DataFlag = ({ countryInfo }) => {

  return (
    <div id="data-flag">
      <img id="flag-obj" src={`${countryInfo[7]}`} />
      <img id="coat-arms" src={`${countryInfo[8]}`} />
    </div>
  )
};

DataFlag.propTypes = {
  countryInfo: PropTypes.array,
};

export default DataFlag;