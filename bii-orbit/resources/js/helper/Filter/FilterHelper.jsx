import {router} from "@inertiajs/react";
import {useCallback, useEffect, useRef} from "react";

export const handleDefaultCheckboxChange = (id, isChecked, type, setValues) => {
    if (isChecked) {
        setValues(prevValues => ({
            ...prevValues,
            [type]: [...prevValues[type], id]
        }));
    } else {
        setValues(prevValues => ({
            ...prevValues,
            [type]: prevValues[type].filter(item => item !== id)
        }));
    }
};

export const resetItems = (setOriginalItems, setItems, originalItems) => {
    const initialItems = originalItems.slice(0, 10);
    setOriginalItems(initialItems);
    setItems(initialItems);
};

export const useHandleSubmit = (endpoint, values, setValues) => {
    const previousValues = useRef(values);

    const handleSubmit = useCallback(() => {
        router.get(endpoint, values, {
            preserveState: true,
            preserveScroll: true,
        });
    }, [endpoint, values]);

    useEffect(() => {
        const hasChanged = JSON.stringify(previousValues.current) !== JSON.stringify(values);

        if (hasChanged) {
            previousValues.current = values;
            handleSubmit();
        }

        return () => {
            // Cleanup if needed
        };
    }, [values, handleSubmit]);

    return { handleSubmit };
};

export function hasValues(values) {
    return Object.values(values).some(value =>
        value !== undefined &&
        value !== null &&
        (typeof value === 'string' && value.trim() !== '') ||
        (Array.isArray(value) && value.length > 0)
    );
}

export const handleCheckboxChange = (id, isChecked, type, setValues) => {
    handleDefaultCheckboxChange(id, isChecked, type, setValues);
};

export const handleDefaultRadioChange = (id, type, setValues) => {
    setValues(prevValues => ({
        ...prevValues,
        [type]: [id],
    }));
};

export const updateParams = (setValues, newParams) => {
    setValues(prevValues => ({
        ...prevValues,
        ...newParams
    }));
};
