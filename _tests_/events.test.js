'use strict';

const globalEmitter = require('../lib/events.js');
const handleEvent = require('../lib/shouterEXAMPLE.js');

describe ('test the handler function independently', () => {
  it ('shoutHandler Works'), () => {

    let consoleSpy = jest.spyOn(console, 'log');

    let payload = {
      name: 'Nathan Normal',
      message: 'Hey',
    };

    expect(handleEvent(payload)).toBeTruthy;
    expect(consoleSpy).toHaveBeenCalledWith(
      'Nathan Normal',
      'Hey',
    );

  };
});

//REMINDER - Can use emit to call functions - see demo code