import { useState } from 'react';
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";

function useFeedbackForm() {
    const [values, setValues] = useState({
        url: "",
        description: "",
        type: ""
    });

    const handleChange = ({ target: { id, type, value, checked } }) =>
        setValues(v => ({
            ...v,
            [id]: type === 'checkbox' ? checked : value
        }));

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/feedback', values, {
            preserveState: true,
            preserveScroll: true,
        })
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };
}

export default useFeedbackForm;
