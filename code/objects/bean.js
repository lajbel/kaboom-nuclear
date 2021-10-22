let beanComps;

export function loadBeanObj() {
    beanComps = [
        sprite("bean"),
        origin("center"),
        pos(center())
    ];
};

export function addBeanObj() {
    return add(beanComps);
};