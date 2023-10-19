import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCountrySelector } from '../../store/selectors/CountrySelector';
import { getCountriesSelector } from '../../store/selectors/AllCountriesSelector';
import { setCountryInput } from '../../store';
import { getAllCountries } from '../../store/thunks/GetAllCountriesThunk';
import { getCountryRequest } from '../../store/thunks/GetCountryRequestThunk';
import { getCountry } from '../../api/GetCountry';
import { randomCountry, randomRequest } from '../functions/RandomCountry';
import gsap from 'gsap';

const NewSearch = ({ retrieveData, errorToggle }) => {
  const dispatch = useDispatch();
  // const [country, setCountry] = useState('');
  // const [allCountries, setAllCountries] = useState([]);
  const barRef = useRef(null);

  const country = useSelector(getCountrySelector);
  const allCountries = useSelector(getCountriesSelector);

  // const setCountriesArray = async () => {
  //   const response = await randomCountry();
  //   setAllCountries(response);
  // };

  const retrieveCountry = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(getCountryRequest());
      console.log(response);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    dispatch(getAllCountries());
    const barRefEl = barRef.current;
    const tl = gsap.timeline();
      tl.from(barRefEl, {
        opacity: 0,
        delay: 2,
        duration: 1,
      })
  }, []);

  return (
    <div id="button-grid" ref={barRef}>
      <button onClick={() => {randomRequest(allCountries, retrieveData, errorToggle)}} id="random-button">Random</button>
      <form onSubmit={retrieveCountry} data-test="search-test-form" autoComplete="off" id="new-search">
        <label id="new-search-label">New Search</label>
        <input onChange={(e) => {dispatch(setCountryInput(e.target.value))}} required id="new-search-input" placeholder="Country name here.." />
        <button id="new-search-button">Search</button>
      </form>
    </div>
  );
};

NewSearch.propTypes = {
  retrieveData: PropTypes.func.isRequired,
  errorToggle: PropTypes.func,
};

export default NewSearch;