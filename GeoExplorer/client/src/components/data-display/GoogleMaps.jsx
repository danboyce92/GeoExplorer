import PropTypes from 'prop-types';

const GoogleMaps = ({ countryInfo }) => {
  
  return (
    <div id="google-maps">
        {
          countryInfo &&
          <h1 id="prompt">Show me on <br/> <a rel="noreferrer" target="_blank" id="gm-link" href={`${countryInfo[6]}`}>Google Maps</a></h1>
        }     
    </div>
  )
};

GoogleMaps.propTypes = {
  countryInfo: PropTypes.array,
};

export default GoogleMaps;