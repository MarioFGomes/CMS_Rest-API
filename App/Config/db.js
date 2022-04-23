var mysql= require('mysql');

db={};
db.cnn={};
db.cnn.exec=function(query,callback){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root123',
        database : 'cms'
      });
    connection.connect();
    connection.query(query, function (error, results, fields) {
        if (error) throw error;       
        callback(results,error);
        connection.end();
      });
}
 
var App={ banco:db } 

module.exports=App;