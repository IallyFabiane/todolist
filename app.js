const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    let today = new Date();
    let currentDay = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    let hour = today.getHours();
    let grettings ="";
  
    if (hour > 12 && hour <= 18) {
       grettings = "Boa tarde";
    } else if (hour < 12 && hour <= 1) {
        grettings = "Bom dia";
    } else {
        grettings= "Boa noite";
    }
    res.render("list", {kindOfDay: currentDay, salute: grettings});
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
