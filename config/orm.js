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
        queryString += " (" + cols.join(', ') + ") ";
        queryString += "VALUES (" + getQues(vals.length) + ")"
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            console.log(result);
            func(result);
        });
    },

    updateOne: function (table_name, cols, vals, func) {
        // var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        var queryString = "UPDATE " + table_name;
        queryString +=
            connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
                if (err) throw err;
                console.log(result);
                func(result);
            });
    }
}

function getQues(number) {
    var quesArray = [];
    for (var i = 0; i < number.length; i++) {
        quesArray.push("?");
    }
    return quesArray.join(", ");
}

function objToSql(ob) {
    for (var key in ob) {
        var array = [];
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
        }
    }

}

module.exports = orm;