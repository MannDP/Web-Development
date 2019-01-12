const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:object", (req, res) => {
	const thing = req.params.object;
	res.render("love.ejs", { thing: thing });
});

app.get("/posts", (req, res) => {
	const posts = [
		{ title: "India lose World Cup Final", author: "Harsha Bhogle" },
		{
			title: "Sachin Tendulkar batsmen of the century",
			author: "Sunil Gavaskar"
		},
		{
			title: "Sachin Tendulkar was a better batsman than me",
			author: "Donald Bradman"
		}
	];
	res.render("posts.ejs", { posts: posts });
});

app.listen(port, undefined, () =>
	console.log(`Serving EJS App on Port ${port}`)
);
