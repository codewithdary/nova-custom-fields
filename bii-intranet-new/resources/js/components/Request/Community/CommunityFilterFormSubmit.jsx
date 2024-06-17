import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";

function useCommunityFilterForm() {
    const queryParams = new URLSearchParams(window.location.search);
    const [values, setValues] = useState({
        company: queryParams.get('company'),
        skill: queryParams.get('skill')
    });

    const handleCompanyChange = handleSelectValueChange(setValues, 'company');
    const handleSkillChange = handleSelectValueChange(setValues, 'skill');

    function handleSubmit(e) {
        e.preventDefault()

        const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([k, v]) => v !== '')
        );

        router.get('/users', filteredValues, {
            preserveScroll: true,
        })
    }

    return {
        values,
        handleSubmit,
        handleCompanyChange,
        handleSkillChange
    };
}

export default useCommunityFilterForm;
