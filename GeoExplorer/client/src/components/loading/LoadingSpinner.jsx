import spinner from '../../imgs/spinner2.svg';

const LoadingSpinner = () => {
  return (
    <div id="spinner-cont">
      <img id="spinner"  src={spinner} alt="loading-spinner" />
      <p id="loading-text">Loading</p>
    </div>
  );
};

export default LoadingSpinner;
