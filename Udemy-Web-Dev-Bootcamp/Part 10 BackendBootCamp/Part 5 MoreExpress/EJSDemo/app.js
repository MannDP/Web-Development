const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/fallinlovewith/:object", (req, res) => {
	const thing = req.params.object;
	res.render("love", { thing: thing });
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
	res.render("posts", { posts: posts });
});

app.listen(port, undefined, () =>
	console.log(`Serving EJS App on Port ${port}`)
);
