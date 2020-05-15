var Datastore = require('nedb')
const userSettings = new Datastore({ filename: './src/database/userSettings.db', autoload: true });
const user = new Datastore({ filename: './src/database/user.db', autoload: true });

async function insertUser(userData){

    var data = {
        ocPath: userData.username,
        proyectPath: userData.password
    }
    
    await user.remove({}, { multi: true }, function (err, numRemoved) {
    });

    await user.insert(data, function (err, newData) {
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
    });

    await userSettings.find({}, function (err, docs) {
        console.log(docs)
    });

}

module.exports = { insertUserSettings };