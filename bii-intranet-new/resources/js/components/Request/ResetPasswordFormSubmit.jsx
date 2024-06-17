import { useState } from 'react';
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";
import * as React from "react";

function useResetPasswordForm({token, email}) {
    const [values, setValues] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = ({ target: { id, type, value, checked } }) =>
        setValues(v => ({
            ...v,
            [id]: type === 'checkbox' ? checked : value
        }));

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/reset-password', values, {
            preserveState: true,
        })
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useResetPasswordForm;
