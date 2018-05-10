var orm = require("../config/orm.js");


var burger = {
    selectAll: function (func) {
        orm.selectAll("burgers", function (res) {
            func(res);
        });
    },
    insertOne: function (cols, vals, func) {
        orm.insertOne("burgers", cols, vals, function (res) {
            func(res);
        });
    },
    updateOne: function (objsColsVals, condition, func) {
        orm.updateOne("burgers", objsColsVals, condition, function (res) {
            func(res);
        });
    }
}

module.exports = burger;


