const { insertUserSettings } = require('./server/server');


function insertSettings(userSettings) {
    insertUserSettings(userSettings);
  }

module.exports = { insertSettings }