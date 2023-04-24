const path = require('path');

// TODO: Add comment explaining role of route below
// Answer: This route is used to serve the index.html file when the user visits the root URL.
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
