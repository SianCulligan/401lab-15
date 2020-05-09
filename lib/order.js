'use strict';

const globalEmitter = require('./events.js');
const faker = require('faker');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setInterval(() => {
//get path from npm faker
  let time = faker.date.recent();

  let storeName = faker.company.companyName();

  let orderId = getRandomInt(10000);

  let name = faker.name.firstName() + ' ' + faker.name.lastName();

  let street = faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state();


  globalEmitter.emit('pickup', { time, storeName, orderId, name, street }); }, 5);
