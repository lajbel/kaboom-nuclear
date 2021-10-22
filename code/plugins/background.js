export function backgroundPlugin(k) {
    return {
        backgroundColor(c) {
            return add([
                rect(width() + 100, height() + 100),
                color(c),
                pos(-50, -50)
            ]);
        }
    };
};