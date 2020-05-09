'use strict';

//raise an event

//assign a listener

//handle that event

const globalEmitter = require('./lib/events.js');
const pickup = require('./lib/handler.js').pickupOrderLogger;
const inTransit = require('./lib/handler.js').onTransitOrderLogger;
const delivered = require('./lib/handler.js').deliveredOrderLogger;




globalEmitter.on('pickup', pickup);
require('./lib/driver.js');
require('./lib/vendor.js');


globalEmitter.on('in-transit', inTransit);


globalEmitter.on('delivered', delivered);

