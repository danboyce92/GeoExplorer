import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import DataBlock from "./DataBlock"
import DataFlag from "./DataFlag"
import GoogleMaps from "./GoogleMaps"
import NewSearch from "./NewSearch"


const DataDisplay = () => {
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [capital, setCapital] = useState('');
    const [pop, setPop] = useState('');
    const [cur, setCur] = useState('');
    const [lang, setLang] = useState('');
    const [cont, setCont] = useState('');
    const [gmLink, setGmLink] = useState('');
    const [flag, setFlag] = useState('');
    const [coatArms, setCoatArms] = useState('');

    const retrieveData = (data) => {
      setData(data);
    }

    useEffect(() => {
      if (data) {
        setGmLink(data[0].maps['googleMaps']);
        setName(data[0].name["official"]);
        setCapital(data[0].capital[0]);
        setPop(data[0].population.toLocaleString());
        setCur(data[0].currencies);
        setLang(data[0].languages);
        setCont(data[0].continents[0]);
        setFlag(data[0].flags.svg)
        setCoatArms(data[0].coatOfArms.svg)
        console.log(data[0].currencies);
      }
    }, [data])

    return (
      <div id="data-display">
        <NewSearch retrieveData={retrieveData} />
        {/* <DataBlock name={name} capital={capital} pop={pop} cur={cur} lang={lang} cont={cont} /> */}
        <GoogleMaps gmLink={gmLink} />
        <DataFlag flag={flag} coatArms={coatArms} />
        <div id="scroll-msg">
          <p id="scroll">Scroll Down</p>
          <FaChevronDown size={32} />
        </div>
      </div>
    )
}

export default DataDisplay;