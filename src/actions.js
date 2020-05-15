const { insertUserSettings, insertUser } = require('./server/server');

function insertUserData(data) {
  console.log(data)
  insertUser(data);
}

function insertSettings(userSettings) {
  insertUserSettings(userSettings);
}

module.exports = {
  insertUserData,
  insertSettings
}