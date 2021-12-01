import { GameObj } from "kaboom";
import k from "../main";

export function addWelcome(): GameObj[] {
	const welcome = k.add([
		k.text("Welcome to Kaboom"),
		k.pos(width() / 2, 100),
		k.color(255, 65, 66),
		k.origin("center"),
	]);

	const pixel = add([
		k.text("WASD or Arrows - Move", { font: "unscii", size: 50 }),
		k.pos(width() / 2, height() - 100),
		k.color(255, 65, 66),
		k.origin("center"),
	]);

	return [welcome, pixel]
}