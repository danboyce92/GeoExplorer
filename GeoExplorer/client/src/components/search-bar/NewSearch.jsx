import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getCountry } from '../../api/GetCountry';
import { getAllCountries } from '../../api/GetAllCountries';
import { randomCountry, randomNumber } from '../functions/RandomCountry';
import gsap from 'gsap';

const NewSearch = ({ retrieveData, errorToggle }) => {
    const [country, setCountry] = useState('');
    const [allCountries, setAllCountries] = useState([]);
    const barRef = useRef(null);

    const retrieveCountry = async (e) => {
      e.preventDefault();
      try {
        const response = await getCountry(country);
        await retrieveData(response);
      }
      catch (err) {
        console.error(err);
        errorToggle();
      }
    };

    const randomRequest = async () => {
      //This will generate a random name from the array
      //Send this to the get country api like a normal request
      const chosenRandomCountry = await allCountries[randomNumber()];
      const check = await randomCountry(randomNumber());
      console.log(check);
    }

    useEffect(() => {
      setAllCountries(randomCountry());
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
      <button onClick={randomRequest} id="random-button">Random</button>
      <form data-test="search-test-form" autoComplete="off" id="new-search">
        <label id="new-search-label">New Search</label>
        <input onChange={(e) => {setCountry(e.target.value)}} required id="new-search-input" placeholder="Country name here.." />
        <button onClick={retrieveCountry} id="new-search-button">Search</button>
      </form>
      </div>

    );
};

NewSearch.propTypes = {
  retrieveData: PropTypes.func.isRequired,
  errorToggle: PropTypes.func,
};

export default NewSearch;