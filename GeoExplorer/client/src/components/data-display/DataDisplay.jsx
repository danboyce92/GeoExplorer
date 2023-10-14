import { useState, useEffect } from 'react';
import DataBlock from "./DataBlock";
import DataFlag from "./DataFlag";
import GoogleMaps from "./GoogleMaps";
import Loading from '../loading/Loading';
import SearchBar from '../SearchBar';
import Scroll from '../Scroll';
import useBoolToggle from '../hooks/BoolToggle';
import { processCountryData } from '../ProcessCountryData';

const DataDisplay = () => {
    const [data, setData] = useState();
    const [dispTrigger, setDispTrigger] = useState('data-none');
    const [countryInfo, setCountryInfo] = useState([]);
    const [error, toggleError] = useBoolToggle(false);
    const [loading, toggleLoading] = useBoolToggle(false);

    const retrieveData = (dataInput) => {
      toggleError(false);
      toggleLoading();
      setDispTrigger('data-none');
      setData(dataInput);
    };

    const errorToggle = () => {
      toggleError();
    };

    useEffect(() => {
      if (data) {
        setCountryInfo(processCountryData(data));
        setTimeout(() => {
          setDispTrigger('data-vis');
          toggleLoading();
        }, 500)
      }
    }, [data]);

    return (
        <div id="data-display">
          <SearchBar retrieveData={retrieveData} data={data} errorToggle={errorToggle} error={error} />
            { loading && 
              <Loading /> 
            }
          <div id={`${dispTrigger}`} data-test="search-test-block">
            <Scroll />
            <DataBlock countryInfo={countryInfo} />
            <GoogleMaps countryInfo={countryInfo} />
            <DataFlag countryInfo={countryInfo} />

          </div>
        </div>
    )
}

export default DataDisplay;