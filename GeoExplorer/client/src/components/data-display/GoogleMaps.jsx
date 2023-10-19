import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCountryInfo } from '../../store/selectors/CountryInfoSelector';

const GoogleMaps = () => {
  
  const countryInfo = useSelector((state) => selectCountryInfo(state));

  return (
    <div id="google-maps">
      { countryInfo &&
        <h1 id="prompt">Show me on <br/> <a rel="noreferrer" target="_blank" id="gm-link" href={`${countryInfo[6]}`} data-test="search-test-gmlink">Google Maps</a></h1>
      }     
    </div>
  );
};

GoogleMaps.propTypes = {
  countryInfo: PropTypes.array,
};

export default GoogleMaps;