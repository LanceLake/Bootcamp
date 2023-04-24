// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const termsData = require('./terms.json');

// TODO: Initialize app variable

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send(`Please go to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`);
});

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.get('/api/terms', (req, res) => {
  res.json(termsData);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
