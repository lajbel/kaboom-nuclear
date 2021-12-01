import k from "../main";
import { addBeanObj } from "../objects/bean.js";
import { addWelcome } from "../objects/welcomeText.js";

export function mainScene() {
	k.backgroundColor(k.rgb(255, 255, 255));

    addBeanObj();
	addWelcome();
};

export function loadMainScene() { return k.scene("main", mainScene); }

