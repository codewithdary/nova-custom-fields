export function handleImageValueChange(setValues) {
    return function (e) {
        let value = e.detail;
        setValues((prevValues) => ({
            ...prevValues,
            files: value,
        }));
    };
}
