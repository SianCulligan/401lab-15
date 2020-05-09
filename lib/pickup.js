'use strict';

const inTransitHandler = require('./inTransit.js');

const pickupHandler = (payload) => {
  console.log(payload);
  inTransitHandler(payload);
};

module.exports = pickupHandler;