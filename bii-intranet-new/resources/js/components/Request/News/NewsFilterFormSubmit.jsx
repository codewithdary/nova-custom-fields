import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";

function useNewsFilterForm() {
    const queryParams = new URLSearchParams(window.location.search);

    const [value, setValues] = useState({
        visibility: queryParams.get('visibility'),
        content_tag: queryParams.get('content_tag')
    });

    const handleVisibilitySelectChange = handleSelectValueChange(setValues, 'visibility');
    const handleContentTagChange = handleSelectValueChange(setValues, 'content_tag');

    function handleSubmit(e) {
        e.preventDefault()

        const filteredValues = Object.fromEntries(
            Object.entries(value).filter(([k, v]) => v !== '')
        );

        router.get('/news', filteredValues, {
            preserveScroll: true,
        })
    }

    return {
        value,
        handleSubmit,
        handleVisibilitySelectChange,
        handleContentTagChange
    };
}

export default useNewsFilterForm;
