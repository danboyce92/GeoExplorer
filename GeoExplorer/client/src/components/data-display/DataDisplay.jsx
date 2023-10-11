import { useState, useEffect } from 'react';
import DataBlock from "./DataBlock";
import DataFlag from "./DataFlag";
import GoogleMaps from "./GoogleMaps";
import Loading from '../loading/Loading';
import SearchBar from '../SearchBar';
import Scroll from '../Scroll';

const DataDisplay = () => {
    const [data, setData] = useState();
    const [dispTrigger, setDispTrigger] = useState('data-none');
    const [loading, setLoading] = useState(false);
    const [countryInfo, setCountryInfo] = useState([]);
    const [error, setError] = useState(false);

    const retrieveData = (dataInput) => {
      setError(false);
      setLoading(true);
      setDispTrigger('data-none');
      setData(dataInput);
    };

    const errorToggle = () => {
      setError(!error);
    };

    useEffect(() => {
      if (data) {
        const countryData = data[0];
        const newCountryInfo = [
          countryData.name["official"],
          countryData.capital[0],
          countryData.population.toLocaleString(),
          countryData.currencies,
          countryData.languages,
          countryData.continents[0],
          countryData.maps['googleMaps'],
          countryData.flags.svg,
          countryData.coatOfArms.svg
        ];
        setCountryInfo(newCountryInfo);
        setTimeout(() => {
          setDispTrigger('data-vis');
          setLoading(false);
        }, 500)
      }
    }, [data]);

    return (
        <div id="data-display">
          <SearchBar retrieveData={retrieveData} data={data} errorToggle={errorToggle} error={error} />
            { loading && 
              <Loading /> 
            }
          <div id={`${dispTrigger}`}>
            <DataBlock countryInfo={countryInfo} />
            <GoogleMaps countryInfo={countryInfo} />
            <DataFlag countryInfo={countryInfo} />
            <Scroll />
          </div>
        </div>
    )
}

export default DataDisplay;