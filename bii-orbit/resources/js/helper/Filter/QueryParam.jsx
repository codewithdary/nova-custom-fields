export const getValuesFromQuery = (queryParams, type) => {
    const values = [];
    for (let [key, value] of queryParams.entries()) {
        if (key.startsWith(`${type}[`)) {
            values.push(value);
        }
    }

    return values;
};
