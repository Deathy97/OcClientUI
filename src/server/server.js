var Datastore = require('nedb')
var userSettings = new Datastore({ filename: './src/database/userSettings.db', autoload: true });

async function insertUserSettings(userSettingsData) {
    var data = {
        ocPath: userSettingsData.ocPath,
        proyectPath: userSettingsData.proyectPath
    }

    await userSettings.remove({}, { multi: true }, function (err, numRemoved) {
    });

    await userSettings.insert(data, function (err, newData) {
    });

    await userSettings.find({}, function (err, docs) {
        console.log(docs)
    });

}

module.exports = { insertUserSettings };