export function handleImageValueChange(setValues) {
    return function(value) {
        setValues(prevValues => ({
            ...prevValues,
            image: value,
        }));
    }
}
