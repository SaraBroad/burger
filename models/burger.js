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


// var orm = require("../config/orm.js");

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
// };

module.exports = burger;


