import NewSearch from "./NewSearch"
import PropTypes from 'prop-types';

const SearchBar = ({ retrieveData, data, errorToggle, error }) => {
  return (
    <div id="search-bar">
      <NewSearch retrieveData={retrieveData} data={data} errorToggle={errorToggle} />  

      {error ? (
        <p id="error">*Your search yielded no results, check your spelling and try again.</p>
        ) : (
        <p id="instruction">Enter the name of a country you wish to learn more about!</p>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  retrieveData: PropTypes.func,
  data: PropTypes.array,
  errorToggle: PropTypes.func,
  error: PropTypes.bool,
};

export default SearchBar;