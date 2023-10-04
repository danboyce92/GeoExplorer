import PropTypes from 'prop-types';



const Header = ({ position }) => {
  return (
    <div className='header' id={position}>Geo-Explorer</div>
  )
}

Header.propTypes = {
  position: PropTypes.string,
}

export default Header