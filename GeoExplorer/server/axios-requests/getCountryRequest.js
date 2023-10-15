const axios = require('axios');

const getCountryRequest = async (country) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.error('An error occurred:', err);
    throw err;
  }
};

module.exports = getCountryRequest;
