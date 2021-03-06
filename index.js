const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./database/database");


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static("public"));

database.authenticate()
    .then(() => {

    })
    .catch((error) => {
        console.log(error);
    });



app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("Servidor rodando!");
});