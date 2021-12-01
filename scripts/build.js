const esbuild = require("esbuild");
const fs = require("fs");

function buildGame() {
    const template = fs.readFileSync("code/template.html", "utf-8");

    esbuild.buildSync({
        bundle: true,
        sourcemap: false,
        target: "es6",
        keepNames: true,
        logLevel: "silent",
        entryPoints: ["code/main.ts"],
        outfile: "game.js",
    });

    fs.writeFileSync("index.html", template.replace("{{kaboom}}", `<script type="module" src="game.js"></script>`));
};

module.exports = buildGame;