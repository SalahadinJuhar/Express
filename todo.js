const express = require("express");
const bodyParser = require('body-parser');

const todo = express();
const port = process.env.PORT || 3000;

todo.set('view engine', 'ejs');

todo.get("/todo", function(req, res) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var dNum = d.getDate();
    console.log("🚀 ~ file: todo.js:13 ~ todo.get ~ dayName:", dayName)
    var tittle = "";
    if (dNum === 6 || dNum === 0 ) {
        tittle = "weekend";
    } else {
        tittle = "weekday";
    }
    res.render('list', {kindDay: tittle});
})

todo.listen(port, function() {
    console.log("Serve is runing on port 3000");
})