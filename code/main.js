// Import modules

import kaboom from "kaboom";

import { loadAssets } from "./loader.js";
import { loadMainScene } from "./scenes/main.js";

import { backgroundPlugin } from "./plugins/background.js"

// Ka-boom

export const k = kaboom({
    plugins: [ 
        backgroundPlugin
    ]
});

// Load Assets

loadAssets();

// Load Scenes

loadMainScene();

// Start scene

go("main");