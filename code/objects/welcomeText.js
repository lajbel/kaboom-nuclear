export function addWelcome() {
	const welcome = add([
		text("Welcome to Kaboom"),
		pos(width() / 2, 100),
		color(255, 65, 66),
		origin("center"),
	]);

	const pixel = add([
		text("WASD or Arrows - Move", { font: "unscii", size: 50 }),
		pos(width() / 2, height() - 100),
		color(255, 65, 66),
		origin("center"),
	]);

	return welcome, pixel;
}