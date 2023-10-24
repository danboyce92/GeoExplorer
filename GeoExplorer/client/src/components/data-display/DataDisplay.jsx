import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataBlock from "./DataBlock";
import DataFlag from "./DataFlag";
import GoogleMaps from "./GoogleMaps";
import Loading from '../loading/Loading';
import SearchBar from '../search-bar/SearchBar';
import Scroll from '../Scroll';
import { processCountryData } from '../functions/ProcessCountryData';
import { setCountryInfo, setDisplay } from '../../store';

const DataDisplay = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.country.data);
    const dispTrigger = useSelector(state => state.toggle.dispTrigger);

    useEffect(() => {
      if (data.length > 0) {
        dispatch(setCountryInfo(processCountryData(data)));
        dispatch(setDisplay('data-vis'));
      };
    }, [data]);

    return (
      <div id="data-display">
        <SearchBar />
        <Loading /> 

        <div id={`${dispTrigger}`} data-test="search-test-block">
          <Scroll />
          <DataBlock />
          <DataFlag />
          <GoogleMaps />
        </div>
      </div>
    );
};

export default DataDisplay;