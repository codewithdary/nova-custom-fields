import { useState } from 'react';
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";

function useForgotPasswordForm() {
    const [values, setValues] = useState({
        email: "",
    });

    const handleChange = ({ target: { id, type, value, checked } }) =>
        setValues(v => ({
            ...v,
            [id]: type === 'checkbox' ? checked : value
        }));

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/forgot-password', values, {
            preserveState: true,
        })
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useForgotPasswordForm;
