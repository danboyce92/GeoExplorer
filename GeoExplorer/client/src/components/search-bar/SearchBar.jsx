import { useSelector } from "react-redux";
import NewSearch from "./NewSearch"
import { selectError } from '../../store';


const SearchBar = () => {
  const error = useSelector((state) => selectError(state));

  return (
    <div id="search-bar">
      <NewSearch />  

      {error ? (
        <p data-test="search-test-error" id="error">*Your search yielded no results, check your spelling and try again.</p>
        ) : (
        <p data-test="search-test-inst" id="instruction">Enter the name of a country you wish to learn more about!</p>
      )}
    </div>
  );
};

export default SearchBar;