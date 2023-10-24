import { useSelector } from 'react-redux';

const GoogleMaps = () => {
  const countryInfo = useSelector(state => state.country.countryInfo);

  return (
    <div id="google-maps">
      { countryInfo &&
        <h1 id="prompt">Show me on <br/> <a rel="noreferrer" target="_blank" id="gm-link" href={`${countryInfo[6]}`} data-test="search-test-gmlink">Google Maps</a></h1>
      }     
    </div>
  );
};

export default GoogleMaps;