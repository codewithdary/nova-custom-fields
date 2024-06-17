export function handleRadioButtonChange(setValues) {
    return function(e) {
        let value = e.target.value;
        value = (value === "true" || value === "false") ? JSON.parse(value) : value;

        setValues(prevValues => ({
            ...prevValues,
            is_published: parseInt(value),
        }));
    }
}
