import { addBeanObj } from "../objects/bean.js";

export function loadMainScene() {
    return scene("main", () => {
        addBeanObj();
    });
};