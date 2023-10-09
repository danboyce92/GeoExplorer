const express = require('express');
const cors = require('cors');
const axios = require('axios');

const port = 5000;

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.get('/name', async (req, res) => {
  try {
    const countryName = req.query.country;

    // Make a request to the external API with the user's requested country name
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    //Potential error situations
    if (!countryName) {
      return res.status(400).json({ error: 'Country name is required' });
    }

    // Send the fetched data as a JSON response
    const countryData = await response.data;
    res.json(countryData);
  } catch (error) {
    res.status(error.response.status).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
