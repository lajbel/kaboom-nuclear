import { addBeanObj } from "../objects/bean.js";
import { addWelcome } from "../objects/welcomeText.js";

export function mainScene() {
	backgroundColor(rgb(255, 255, 255));

    addBeanObj();
	addWelcome();
};

export function loadMainScene() { return scene("main", mainScene); }
