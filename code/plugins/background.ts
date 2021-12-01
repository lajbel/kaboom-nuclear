import { Color, KaboomCtx } from "kaboom";

export function backgroundPlugin(k: KaboomCtx) {
    return {
        backgroundColor(c: Color) {
            return add([
                rect(width() + 100, height() + 100),
                color(c),
                pos(-50, -50)
            ]);
        }
    };
};