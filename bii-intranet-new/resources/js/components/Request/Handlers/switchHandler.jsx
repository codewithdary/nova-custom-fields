export function handleSwitchChange(setValues, key) {
    return function(e) {
        setValues(prevValues => ({
            ...prevValues,
            [key]: e.target.checked,
        }));
    }
}
