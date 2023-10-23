import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../store/thunks/GetAllCountriesThunk';
import { getCountryRequest } from '../../store/thunks/GetCountryRequestThunk';
import { returnRandomCountry } from '../functions/RandomCountry';
import gsap from 'gsap';
import { setCountryInput, 
  setLoading, 
  setDisplay, 
  setError, 
  getCountrySelector, 
  getCountriesSelector, 
  selectData } from '../../store';

const NewSearch = () => {
  const dispatch = useDispatch();
  const barRef = useRef(null);
  const country = useSelector(getCountrySelector);
  const allCountries = useSelector(getCountriesSelector);
  const data = useSelector(selectData);

  const retrieveCountry = async (e) => {
    e.preventDefault();
    dispatch(setDisplay('data-none'));
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(getCountryRequest());

  };

  const randomButton = () => {
    const randomCountry = returnRandomCountry(allCountries);
    dispatch(setCountryInput(randomCountry))
    dispatch(setLoading(true));
    dispatch(setDisplay('data-none'));
    dispatch(getCountryRequest());
  }

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
      <button onClick={randomButton} id="random-button">Random</button>
      <form onSubmit={retrieveCountry} data-test="search-test-form" autoComplete="off" id="new-search">
        <label id="new-search-label">New Search</label>
        <input onChange={(e) => {dispatch(setCountryInput(e.target.value))}} required id="new-search-input" placeholder="Country name here.." />
        <button id="new-search-button">Search</button>
      </form>
    </div>
  );
};

export default NewSearch;