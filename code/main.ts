// Import modules

import kaboom from "kaboom";

import { loadAssets } from "./loader";
import { loadMainScene } from "./scenes/main";

import { backgroundPlugin } from "./plugins/background"

// Ka-boom

const k = kaboom({
    plugins: [ 
        backgroundPlugin
    ]
});

export default k;

// Load Assets

loadAssets();

// Load Scenes

loadMainScene();

// Start scene

k.go("main");