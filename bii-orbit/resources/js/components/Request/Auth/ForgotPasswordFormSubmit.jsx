import { useState } from 'react';
import { router } from "@inertiajs/react";

const initialFormState = {
    email: "",
};

function useForgotPasswordForm() {
    const [values, setValues] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('password.email'), values, { preserveScroll: true });
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useForgotPasswordForm;
