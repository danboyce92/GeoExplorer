import na from '../../imgs/na.svg';
import { useSelector } from 'react-redux';

const DataFlag = () => {
  const countryInfo = useSelector(state => state.country.countryInfo);

  return (
    <div id="data-flag">
      <div className='flag-text'>National Flag</div>
      <img id="flag-obj" src={`${countryInfo[7]}`} data-test="search-test-flag" />     
      <div className='flag-text'>Coat of Arms</div>
      <img id="coat-arms" src={`${countryInfo[8] || na}`} data-test="search-test-coat" />
    </div>
  );
};

export default DataFlag;