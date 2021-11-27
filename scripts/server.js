const buildGame = require("./build.js");

const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    buildGame();
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.use(express.static(path.join(__dirname, "..")));

app.listen(8000, () => {
    console.log("online");
});