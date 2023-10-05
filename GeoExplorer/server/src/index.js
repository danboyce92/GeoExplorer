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

//Start this request from scratch!
app.get('/name', async (req, res) => {
  try {
    const countryName = req.query.country;

    if (!countryName) {
      return res.status(400).json({ error: 'Country name is required' });
    }

    // Make a request to the external API with the user's requested country name
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const countryData = await response.data;

    // Send the fetched data as a JSON response
    res.json(countryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
