export const handleSelectValueChange = (setValues, key) => {
    return function(e) {
        setValues(prevValues => ({
            ...prevValues,
            [key]: e.id,
        }));
    }
}
