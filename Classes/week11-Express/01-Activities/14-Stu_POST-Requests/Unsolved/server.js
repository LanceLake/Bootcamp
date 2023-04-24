const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.json(`${req.method} request received for reviews`);

	console.log(`${req.method} request received for reviews`);

});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post('/api/reviews', (req, res) => {
  // Your code here
  res.json(`${req.method} request received for reviews`);

	console.log('${req.method} request received for reviews');
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} request received for upvotes`);

	console.log(`${req.method} request received for upvotes`);

});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} request received for upvotes`);

	console.log(`${req.method} request received for upvotes`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
