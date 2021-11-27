export function addBeanObj() {
    const bean = add([
        sprite("bean"),
        origin("center"),
        pos(center()),
		{
			speed: 250
		}
    ]);

	// bean movement

	bean.onUpdate(() => {
		if(keyIsDown("up") || keyIsDown("w")) {
			bean.move(0, -bean.speed);
		}

		if(keyIsDown("down") || keyIsDown("s")) {
			bean.move(0, bean.speed);
		}

		if(keyIsDown("left") || keyIsDown("a")) {
			bean.move(-bean.speed, 0);
		}

		if(keyIsDown("right") || keyIsDown("d")) {
			bean.move(bean.speed, 0);
		}
	});

	return bean;
};