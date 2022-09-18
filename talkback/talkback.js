const talkback = require('talkback');
const path = require('path');

let talkbackInstance;

module.exports = function talkbackStart() {
  if (!talkbackInstance) {
    talkbackInstance = talkback({
      host: process.env.REACT_APP_HOST,
      path: path.join(__dirname, '/tapes'),
      port: 3000,
    });

    talkbackInstance.start();
  }

  return talkbackInstance;
};
