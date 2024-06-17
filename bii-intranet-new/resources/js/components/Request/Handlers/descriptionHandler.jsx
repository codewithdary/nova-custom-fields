export function handleEditorValueChangeLocal(setValues, props) {
    return function(description, editor) {
        props.handleEditorChange(description);
        setValues(prevValues => ({
            ...prevValues,
            description: description,
        }));
    }
}

export function handleContentValueChange(setValues, key) {
    return function(newDescription) {
        setValues(prevValues => ({
            ...prevValues,
            [key]: newDescription,
        }));
    }
}
