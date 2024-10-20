import { useState } from 'react';
import {router} from "@inertiajs/react";

function useLoginForm() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: ""
    });

    const handleChange = ({ target: { id, type, value, checked } }) =>
        setValues(v => ({
            ...v,
            [id]: type === 'checkbox' ? checked : value
        }));

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('login'), values, { preserveScroll: true });
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useLoginForm;
