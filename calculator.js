const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("Result is" + result);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html")
});

app.post('/bmicalculator', (req, res) => {
    var num3 = Number(req.body.m1);
    var num4 = Number(req.body.m2);

    var bmi = num3 / ( num4 * num4 );
    res.send("Your BMI is" + bmi);
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});