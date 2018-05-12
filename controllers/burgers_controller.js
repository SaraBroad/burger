// Express
// burger.js



var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});


router.post('/burgers', function (req, res) {
    console.log(req.body.name);
    burger.insertOne([
        'burger_name'
    ], [
            req.body.name
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log(req.params.id);
    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.json(data);
    });
});



//   router.put("burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });





module.exports = router;
