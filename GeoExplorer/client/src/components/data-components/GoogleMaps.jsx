import PropTypes from 'prop-types';

const GoogleMaps = ({ gmLink }) => {
  return (
    <div id="google-maps">
        <h1 id="prompt">Show me on <a id="gm-link" href={`${gmLink}`}>Google Maps</a></h1>
    </div>
  )
}

GoogleMaps.propTypes = {
  gmLink: PropTypes.string,
}

export default GoogleMaps