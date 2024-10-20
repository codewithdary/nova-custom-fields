export function handleRadioButtonChange(setValues, key) {
    return function(e) {
        let value = e.target.value;
        value = (value === "true" || value === "false") ? JSON.parse(value) : value;

        setValues(prevValues => ({
            ...prevValues,
            [key]: parseInt(value),
        }));
    }
}
