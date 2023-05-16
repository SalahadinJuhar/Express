const express = require("express");
const https = require("https");
const bodyParser = require('body-parser');

const api = express();

const port = process.env.PORT || 3000;

api.use(bodyParser.urlencoded({extended: true}));

api.get("/api", function(req, res) {
    res.sendFile(__dirname + "/api.html")
})

api.post("/api", function(req, res) {
    const amount = 2;
    const category = 10;
    const diff = req.body.diffInput;
    console.log("🚀 ~ file: api.js:19 ~ api.post ~ req.body.diffInput:", req.body.diffInput)
    const url = "https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + diff + "";
    https.get(url, function(response){
        console.log("🚀 ~ file: api.js:12 ~ https.get ~ response:", response.statusCode);
        response.on("data", function(data){
            const quote = JSON.parse(data)
            console.log("🚀 ~ file: api.js:14 ~ response.on ~ data:", data)
            const firstQua = quote.results[0].question;
            const secondQua = quote.results[1].question;
            console.log("🚀 ~ file: api.js:15 ~ response.on ~ quote:", quote)
            res.write("<h1>First Question</h1>");
            res.write("<p>" + firstQua + "</p>");
            res.write("<h1>Second Question</h1>");
            res.write("<p>" + secondQua + "</p>");
            res.send()
        });
    })
})
    

api.listen(port, function() {
    console.log("Serve is runing on port 3000");
})