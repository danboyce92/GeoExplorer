import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataBlock from "./DataBlock";
import DataFlag from "./DataFlag";
import GoogleMaps from "./GoogleMaps";
import Loading from '../loading/Loading';
import SearchBar from '../search-bar/SearchBar';
import Scroll from '../Scroll';
import useBoolToggle from '../../hooks/BoolToggle';
import { setCountryInfo } from '../../store';
import { selectData } from '../../store/selectors/DataSelector';
import { selectLoading } from '../../store/selectors/LoadingSelector';
import { processCountryData } from '../functions/ProcessCountryData';
import { setDisplay, setLoading } from '../../store';
import { selectDispTrigger } from '../../store/selectors/DisplaySelector';

const DataDisplay = () => {
    const dispatch = useDispatch();
    // const [data, setData] = useState();
    // const [dispTrigger, setDispTrigger] = useState('data-none');
    // const [countryInfo, setCountryInfo] = useState([]);
    const [error, toggleError] = useBoolToggle(false);
    // const [loading, toggleLoading] = useBoolToggle(false);

    const data = useSelector((state) => selectData(state));
    const loading = useSelector((state) => selectLoading(state));
    const dispTrigger = useSelector((state) => selectDispTrigger(state));


    const retrieveData = (dataInput) => {
      toggleError(false);
      dispatch(setLoading());
      dispatch(setDisplay('data-none'));
      setData(dataInput);
    };

    const errorToggle = () => {
      toggleError();
    };

    useEffect(() => {
      if (data['data'].length > 0) {
        dispatch(setCountryInfo(processCountryData(data)));
        console.log(data);
        setTimeout(() => {
          dispatch(setDisplay('data-vis'));
          dispatch(setLoading(false));
        }, 500)
      };
    }, [data]);

    return (
        <div id="data-display">
          <SearchBar retrieveData={retrieveData} errorToggle={errorToggle} error={error} />
            { loading && 
              <Loading /> 
            }
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