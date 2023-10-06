import { useState } from 'react';
import PropTypes from 'prop-types';
import { getCountry } from '../../api/GetCountry';

const NewSearch = ({ retrieveData }) => {
    const [country, setCountry] = useState('');


    const retrieveCountry = async (e) => {
      e.preventDefault();
      const response = await getCountry(country);
      await retrieveData(response);

    };



    return (
      <form onSubmit={retrieveCountry} autoComplete="off" id="new-search">
        <label id="new-search-label">New Search</label>
        <input onChange={(e) => {setCountry(e.target.value)}} required id="new-search-input" placeholder="Country name here.." />
        <button id="new-search-button">Search</button>
      </form>
    )
}

NewSearch.propTypes = {
  retrieveData: PropTypes.func.isRequired,
}

export default NewSearch;