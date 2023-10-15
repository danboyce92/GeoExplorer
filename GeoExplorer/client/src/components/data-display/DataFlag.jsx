import PropTypes from 'prop-types';

const DataFlag = ({ countryInfo }) => {

  return (
    <div id="data-flag">
      <div className='flag-text'>National Flag</div>
      <img id="flag-obj" src={`${countryInfo[7]}`} data-test="search-test-flag" />     
      <div className='flag-text'>Coat of Arms</div>
      <img id="coat-arms" src={`${countryInfo[8]}`} data-test="search-test-coat" />
    </div>
  );
};

DataFlag.propTypes = {
  countryInfo: PropTypes.array,
};

export default DataFlag;