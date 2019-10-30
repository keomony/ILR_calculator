export const dates = {};

export const start = (id, start) => {
    if (!dates[id]) dates[id] = {};
    Object.assign(dates[id], { start });
};

export const end = (id, end) => {
    if (!dates[id]) dates[id] = {};
    Object.assign(dates[id], { end });
};

