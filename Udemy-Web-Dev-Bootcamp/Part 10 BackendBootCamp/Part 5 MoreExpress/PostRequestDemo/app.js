const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3000;
let friends = ["Kathan", "Dawson", "Faique", "Dhairya", "Nicholas"];

app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: false }));

app.get("/", (undefined, res) => {
	res.render("home");
});

app.get("/friends", (req, res) => {
	res.render("friends", { friends: friends });
});

app.post("/addfriend", (req, res) => {
	const friend = req.body.newfriend;
	friends.push(friend);
	res.redirect("/friends");
});

app.listen(port, undefined, undefined);
