  var sqlite3 = require("sqlite3").verbose();
  console.log('llega');

  var db = new sqlite3.Database("./database/mydb.sqlite3", (err) => {
    if (err) {
      db.close();
      console.log("Error when creating the database", err);
    } else {
      console.log("Database created!");
    }
  });


  function alerta(){
    console.log('llega');
  }


