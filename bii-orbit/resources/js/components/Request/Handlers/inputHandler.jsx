export const handleInputChange = (setValues) => {
    return function(e) {
        const key = e.target.id;
        let value = e.target.value;

        setValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }));
    }
}
