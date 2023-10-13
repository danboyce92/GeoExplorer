const express = require('express');
const cors = require('cors');
const getRequest = require('./getRequest');

const port = 5000;

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

app.get('/name', async (req, res) => {
  const countryName = req.query.country;

  //Edge case
  if (!countryName) {
    return res.status(400).json({ error: 'Country name is required' });
  }

  try {
    // Make a request to the external API with the user's requested country name
    // Send the fetched data as a JSON response
    const countryData = await getRequest(countryName);
    res.json(countryData);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//If statement prevents server from being left open when tests are running
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
