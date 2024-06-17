export function handleSelectValueChange(setValues, key) {
    return function(value) {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }));
    }
}
