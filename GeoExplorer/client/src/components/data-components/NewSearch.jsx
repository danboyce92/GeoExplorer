import { useState, useEffect } from 'react';
import { getCountry } from '../../api/GetCountry';

const NewSearch = () => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState();

  const retrieveCountry = async (e) => {
    e.preventDefault();
    const response = await getCountry(country);
    setData(response);
    console.log(response)
  };

  useEffect(() => {

  }, [data])

  return (
    <form onSubmit={retrieveCountry} autoComplete="off" id="new-search">
      <label id="new-search-label">New Search</label>
      <input onChange={(e) => {setCountry(e.target.value)}} required id="new-search-input" placeholder="Country name here.." />
      <button id="new-search-button">Search</button>
    </form>
  )
}

export default NewSearch