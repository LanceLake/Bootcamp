const express = require('express');

const feedbackRouts = require('./feedbackRouter')
const tipsRoutes = require('./tipsRouter')

const app = express();
app.use('/feedback', feedbackRouts)
app.use('/tips', tipsRoutes)

module.exports = app;