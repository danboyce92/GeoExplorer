import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa";
import DataBlock from "./DataBlock";
import DataFlag from "./DataFlag";
import GoogleMaps from "./GoogleMaps";
import NewSearch from "./NewSearch";
import Loading from '../loading/Loading';

const DataDisplay = () => {
    const [data, setData] = useState('');
    const [dispTrigger, setDispTrigger] = useState('data-none');
    const [loading, setLoading] = useState(false);
    const [countryInfo, setCountryInfo] = useState([]);
    const [gmLink, setGmLink] = useState('');
    const [flag, setFlag] = useState('');
    const [coatArms, setCoatArms] = useState('');
    const dataRef = useRef(null);

    const retrieveData = (dataInput) => {
      //Function needs to make blocks visible.
      //Needs to display loading skeletons.
      //Make a request to the server.
      //Replace skeletons when data is available.
      setLoading(true);
      setDispTrigger('data-none');
      setData(dataInput);
      dataRef.current = dataInput;
    }

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
        ];
        setCountryInfo(newCountryInfo);
        setGmLink(countryData.maps['googleMaps']);
        setFlag(countryData.flags.svg);
        setCoatArms(countryData.coatOfArms.svg);

        setTimeout(() => {
          setDispTrigger('data-vis');
          setLoading(false);
        }, 500)
      }
    }, [data])

    return (
        <div id="data-display">
          <div id="search-bar">
            <NewSearch retrieveData={retrieveData} data={data} />  
            <p id="instruction">Enter the name of a country you wish to learn more about!</p>
          </div>
            { loading &&
              <Loading />
            }

          <div id={`${dispTrigger}`}>
            <DataBlock countryInfo={countryInfo} />
            <GoogleMaps gmLink={gmLink} />
            <DataFlag flag={flag} coatArms={coatArms} />
            <div id="scroll-msg">
              <p id="scroll">Scroll Down</p>
              <FaChevronDown size={32} />
            </div>
          </div>
        </div>
    )
}

export default DataDisplay;