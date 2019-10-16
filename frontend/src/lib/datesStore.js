export const dates = {};

export const start = (id, start) => {
    if (!dates[id]) dates[id] = {};
    Object.assign(dates[id], { start });
    console.log(dates);
};

export const end = (id, end) => {
    if (!dates[id]) dates[id] = {};
    Object.assign(dates[id], { end });
    console.log(dates);
};

