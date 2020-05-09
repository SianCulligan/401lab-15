'use strict';

const deliveredHandler = require('./delivered.js');

const inTransitHandler = (payload) => {
  console.log(payload);
  deliveredHandler(payload);
};

module.exports = inTransitHandler;