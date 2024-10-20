import { useState } from 'react';
import { router } from "@inertiajs/react";

const initialFormState = {
    email: "",
    password: "",
    password_confirmation: ""
};

function useResetPasswordForm() {
    const [values, setValues] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('password.update'), values, { preserveScroll: true });
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useResetPasswordForm;
