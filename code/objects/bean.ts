import k from "../main";
import { GameObj } from "kaboom";

export function addBeanObj(): GameObj {
    const bean = k.add([
        k.sprite("bean"),
        k.origin("center"),
        k.pos(k.center()),
		{
			speed: 250
		}
    ]);

	// bean movement

	bean.onUpdate(() => {
		if(k.isKeyDown("up") || k.isKeyDown("w")) {
			bean.move(0, -bean.speed);
		}

		if(k.isKeyDown("down") || k.isKeyDown("s")) {
			bean.move(0, bean.speed);
		}

		if(k.isKeyDown("left") || k.isKeyDown("a")) {
			bean.move(-bean.speed, 0);
		}

		if(k.isKeyDown("right") || k.isKeyDown("d")) {
			bean.move(bean.speed, 0);
		}
	});

	return bean;
};