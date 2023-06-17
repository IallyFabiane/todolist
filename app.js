const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
let newItems = [];
let newItem = "";
let workItems = [];

app.get("/", function(req, res) {
    let today = new Date();
    let currentDay = today.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase();
  
    res.render("list", {listTitle: currentDay, newListItems: newItems});
});

app.post("/", function(req, res) {

    newItem = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        newItems.push(newItem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list",{listTitle: "Work List", newListItems: workItems} )
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
