'use strict';

//raise an event

//assign a listener

//handle that event

const globalEmitter = require('./lib/events.js');
const pickupHandler = require('./lib/pickup.js');

globalEmitter.on('orderPlaced', pickupHandler);

require('./lib/order.js');































// //EXAMPLE - PAYLOAD OBJ
// // const handleEvent = (payload) => {
// //     console.log('Heard a shout');
// //     console.log('They shouted', payload);
// //   };

// //EXAMPLE - MULTIPLE VAIRABLES
// // const handleEvent = (name, message) => {
// //   console.log('Heard a shout from', name);
// //   console.log('They shouted', message);
// // };

// //EXAMPLE 3
// // const handleEvent = (payload) => {
// //   console.log('Heard a shout');
// //   console.log('They shouted', payload);
// // };


// const pickup = (time, storeName, orderId, name, street) => {
//   console.log('Pick up requested');
//   console.log('- Time: ', time);
//   console.log('- Store: ', storeName);
//   console.log('- Order ID: ', orderId);
//   console.log('- Customer: ', name);
//   console.log('- Address: ', street);
// };

// const inTransit = (orderId) => {
// //  driver.js
//   console.log('Driver has picked up order, ', orderId);
// };

// const delivered = (payload) => {
//   // vendor.js
// };






// globalEmitter.on('pickup', pickup);

// globalEmitter.on('inTransit', inTransit);

// globalEmitter.on('delivered', delivered);

// // globalEmitter.emit('shout-in-forest');
// globalEmitter.emit('pickup');

// globalEmitter.emit('inTransit');

// globalEmitter.emit('delivered');


// require('./lib/shouterEXAMPLE.js');

// require('./lib/driver.js');

// require('./lib/vendor.js');


//check out npm faker - randon thing generator (names, addresses, emails. etc.)


//  New order = every 5 seconds

// pickup immediately
// intransit - delay 1.5
// Delivery 3 - 3 seconds
// Thank you immediately once delivered 