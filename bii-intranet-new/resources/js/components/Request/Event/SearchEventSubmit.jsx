import { useState } from 'react';
import {router} from "@inertiajs/react";

function useSearchEventForm() {
    const params = new URLSearchParams(document.location.search);
    const endpoint = window.location.pathname;

    const [value, setValue] = useState({
        term: params.get("term") ?? "",
    });

    function handleChange(e) {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (value.term) {
            router.get(endpoint, value, {
                preserveScroll: true,
            })
        }
    }

    return {
        value,
        handleChange,
        handleSubmit,
    };
}

export default useSearchEventForm;
