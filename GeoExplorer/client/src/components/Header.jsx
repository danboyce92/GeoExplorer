import PropTypes from 'prop-types';



const Header = () => {
  return (
    <div id='header'>Geo-Explorer</div>
  )
}

Header.propTypes = {
  position: PropTypes.string,
}

export default Header