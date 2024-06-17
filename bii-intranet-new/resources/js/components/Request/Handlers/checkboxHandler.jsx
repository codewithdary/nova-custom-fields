export function handleCheckboxValueChange(setValues, key) {
    return function(e) {
        const isChecked = e.target.checked;

        setValues(prevValues => ({
            ...prevValues,
            [key]: isChecked,
        }));
    }
}

