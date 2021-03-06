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
        queryString += "VALUES (" + getQues(vals.length) + ") ";
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            console.log(result);
            func(result);
        });
    },

    updateOne: function (table_name, objsColsVals, condition, func) {
        var queryString = "UPDATE " + table_name;
        queryString += " SET "
        queryString += objToSql(objsColsVals);
        queryString += " WHERE "
        queryString += condition;
            connection.query(queryString, function (err, result) {
                if (err) throw err;
                console.log(result);
                func(result);
            });
    }
}

function getQues(number) {
    var quesArray = [];
    for (var i = 0; i < number; i++) {
        quesArray.push("?");
    }
    return quesArray.toString();
}

function objToSql(ob) {
    var array = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
            return array.toString();
}

module.exports = orm;