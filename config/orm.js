var connection = require("../config/connection.js");

var orm = {
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burger_name) {
        var queryString = "INSERT INTO burgers WHERE burger_name = ?"
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function () {
        // var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;