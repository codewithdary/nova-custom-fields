import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";

function useEventFilterForm() {
    const queryParams = new URLSearchParams(window.location.search);
    const endpoint = window.location.pathname;

    const [values, setValues] = useState({
        company_tag: queryParams.get('company_tag'),
        content_tag: queryParams.get('content_tag')
    });

    const handleCompanyTagChange = handleSelectValueChange(setValues, 'company_tag');
    const handleContentTagChange = handleSelectValueChange(setValues, 'content_tag');

    function handleSubmit(e) {
        e.preventDefault()

        const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([k, v]) => v !== '')
        );

        router.get(endpoint, filteredValues, {
            preserveScroll: true,
        })
    }

    return {
        values,
        handleSubmit,
        handleCompanyTagChange,
        handleContentTagChange
    };
}

export default useEventFilterForm;
