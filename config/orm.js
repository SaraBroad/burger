var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table_name, func) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table_name], function (err, result) {
            if (err) throw err;
            console.log(result);
            func(result);
        });
    },
    insertOne: function (table_name, cols, vals, func) {
        var queryString = "INSERT INTO " + table_name;
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + getQues(vals.length) + ")"
        connection.query(queryString, vals, function (err, result) {
            console.log(result);
            if (err) throw err;
            func(result);
        });
    },

    updateOne: function (table_name, objsColsVals, condition, func) {
        var queryString = "UPDATE " + table_name;
        queryString += " SET "
        queryString += objToSql(objsColsVals);
        queryString += " WHERE "
        queryString += "condition"
            connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
                if (err) throw err;
                console.log(result);
                func(result);
            });
    }
}




module.exports = orm;