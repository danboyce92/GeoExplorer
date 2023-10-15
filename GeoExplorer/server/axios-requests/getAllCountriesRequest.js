const axios = require('axios');

const getAllCountriesRequest = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.error('An error occurred:', err);
    throw err;
  }
};

module.exports = getAllCountriesRequest;
