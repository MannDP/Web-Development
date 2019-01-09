const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hi There!");
});
app.get("/bye", (req, res) => res.send("Goodbye"));
app.get("/dog", (req, res) => res.send("MEOW!"));

app.listen(port, undefined, function () {
    console.log("Serving your first express app!");
}); 
