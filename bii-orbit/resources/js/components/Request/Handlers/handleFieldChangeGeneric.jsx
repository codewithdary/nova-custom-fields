const handleFieldChangeGeneric = (setValues) => (e, fieldType, fieldName) => {
    const { value } = e.target;

    setValues(prevValues => ({
        ...prevValues,
        [fieldName]: value,
    }));
};

export default handleFieldChangeGeneric;
