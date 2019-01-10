const express = require("express");
const app = express();
const port = 3000;

//First routes
app.get("/", function (req, res) {
    res.send("Hi There!");
});
app.get("/bye", (req, res) => res.send("Goodbye"));
app.get("/dog", (req, res) => res.send("MEOW!"));

//Route matchers
app.get("/r/:subReddit", (req, res) => {
    const subReddit = req.params.subReddit;
    res.send(`Welcome to the ${subReddit} Sub-Reddit Page`);
});

// Route matcher runs on any route... therefore, it needs to be at the bottom
app.get("*", (undefined, res) => res.send("Oops! We couldn't find the page you're looking for!"));

app.listen(port, undefined, function () {
    console.log("Serving your first express app!");
}); 
