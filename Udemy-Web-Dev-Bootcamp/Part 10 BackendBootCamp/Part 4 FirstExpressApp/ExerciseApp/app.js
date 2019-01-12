const express = require("express");
const app = express();
const port = 3000;

const animalSounds = {
	dog: "Woof! Woof!",
	cat: "Meow!",
	cow: "Moo",
	lion: "Roar",
	fox: "What does the fox say???"
};

app.get("/", (undefined, res) =>
	res.send("Hi there, welcome to my assignment")
);
app.get("/speak/:animal", (req, res) => {
	const sound = animalSounds[req.params.animal.toLowerCase()];
	if (sound !== undefined) {
		res.send(`The ${req.params.animal} says ${sound}`);
	} else {
		res.send(
			"Oops! This animal is like the fog. We don't know what it says!"
		);
	}
});
app.get("/repeat/:phrase/:numRepeats", (req, res) => {
	try {
		const numRepeats = parseInt(req.params.numRepeats);
		const phrase = req.params.phrase + " ";
		let responseText = "";
		for (let i = 0; i < numRepeats; i++) {
			responseText += phrase;
		}
		res.send(responseText);
	} catch (error) {
		res.send("Oopsies! Please check the input you entered!");
	}
});

app.get("*", (undefined, res) =>
	res.send("Oh no! We couldn't quite find the page you were looking for")
);
app.listen(3000, undefined, () =>
	console.log("Serving your application on port 3000")
);
