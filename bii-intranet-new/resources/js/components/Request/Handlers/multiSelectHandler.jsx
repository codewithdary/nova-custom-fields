export function handleMultiSelectValueChange(setValues, key) {
    return function(value) {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }));
    }
}
