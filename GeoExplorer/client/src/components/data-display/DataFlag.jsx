import PropTypes from 'prop-types';

const DataFlag = ({ countryInfo }) => {

  return (
    <div id="data-flag">
      <img id="flag-obj" src={`${countryInfo[7]}`} data-test="search-test-flag" />
      <img id="coat-arms" src={`${countryInfo[8]}`} data-test="search-test-coat" />
    </div>
  )
};

DataFlag.propTypes = {
  countryInfo: PropTypes.array,
};

export default DataFlag;