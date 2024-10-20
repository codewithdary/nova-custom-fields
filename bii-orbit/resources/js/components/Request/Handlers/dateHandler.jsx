export function handleDateChange(setValues, varKey) {
    return function(arg) {
        let key, value;

        if (arg && arg.target) {
            key = arg.target.id;
            value = arg.target.value;
        } else {
            key = varKey;
            value = arg;
        }

        setValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }));
    }
}
