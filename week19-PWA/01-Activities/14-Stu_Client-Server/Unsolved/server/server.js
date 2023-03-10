const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
// Answer: This code is used to serve static files such as images, CSS files, and JavaScript files.
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
