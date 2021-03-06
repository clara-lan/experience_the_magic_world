const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
//connected in database.js
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL);

const app = express();

require('dotenv').config();
require('./config/database');


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



// API routes go before...
app.use('/api/users', require('./routes/api/users'));
app.use('/api', function (req, res) {
  res.status(404).json({ error: 'Resource not found' });
});


if (process.env.NODE_ENV === 'production') {
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'build')));
}

if (process.env.NODE_ENV === 'production') {
  const path  =  require('path');
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
