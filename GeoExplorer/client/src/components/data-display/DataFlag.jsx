import PropTypes from 'prop-types';
import na from '../../imgs/na.svg';
import useBoolToggle from '../../hooks/BoolToggle';
import { useSelector } from 'react-redux';
import { selectCountryInfo } from '../../store/selectors/CountryInfoSelector';

const DataFlag = () => {
  const [isLoading, toggleLoading] = useBoolToggle(true);

  const countryInfo = useSelector((state) => selectCountryInfo(state));

  return (
    <div id="data-flag">
      <div className='flag-text'>National Flag</div>
      <img id="flag-obj" src={`${countryInfo[7]}`} data-test="search-test-flag" />     
      <div className='flag-text'>Coat of Arms</div>
      <img id="coat-arms" src={`${countryInfo[8] || na}`} data-test="search-test-coat" onLoad={() => {toggleLoading(false)}} />
      {isLoading && <div id="coat">Loading</div>}
    </div>
  );
};

DataFlag.propTypes = {
  countryInfo: PropTypes.array,
};

export default DataFlag;