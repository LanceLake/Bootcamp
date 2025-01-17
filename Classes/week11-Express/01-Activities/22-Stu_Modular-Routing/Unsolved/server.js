const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const apiRoutes = require('./routes/index');

const index = require('./routes/index');


const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
