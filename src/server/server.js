var Datastore = require('nedb')
const userSettings = new Datastore({ filename: './src/database/userSettings.db', autoload: true });
const user = new Datastore({ filename: './src/database/user.db', autoload: true });

async function insertUser(userData) {

    var data = {
        ocPath: userData.ocUser,
        proyectPath: userData.ocPassword
    }

    await user.remove({}, { multi: true }, function (err, numRemoved) {
    });

    await user.insert(data, function (err, newData) {
        console.log(newData);
    });
}


async function insertUserSettings(userSettingsData) {
    var data = {
        ocPath: userSettingsData.ocPath,
        proyectPath: userSettingsData.proyectPath
    }

    await userSettings.remove({}, { multi: true }, function (err, numRemoved) {
    });

    await userSettings.insert(data, function (err, newData) {
        console.log(newData)
    });

}

module.exports = {
    insertUser,
    insertUserSettings
};