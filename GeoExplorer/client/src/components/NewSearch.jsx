import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getCountry } from '../api/GetCountry';
import gsap from 'gsap';

const NewSearch = ({ retrieveData, errorToggle }) => {
    const [country, setCountry] = useState('');
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

    useEffect(() => {
      const barRefEl = barRef.current;
      const tl = gsap.timeline();
        tl.from(barRefEl, {
          opacity: 0,
          delay: 2,
          duration: 1,
        })
    }, []);

    return (
      <form onSubmit={retrieveCountry} autoComplete="off" id="new-search" ref={barRef}>
        <label id="new-search-label">New Search</label>
        <input onChange={(e) => {setCountry(e.target.value)}} required id="new-search-input" placeholder="Country name here.." />
        <button id="new-search-button">Search</button>
      </form>
    );
};

NewSearch.propTypes = {
  retrieveData: PropTypes.func.isRequired,
  errorToggle: PropTypes.func,
};

export default NewSearch;