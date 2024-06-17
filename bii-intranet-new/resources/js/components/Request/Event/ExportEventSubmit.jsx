import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";
import {handleDateChange} from "../Handlers/dateHandler.jsx";
import {handleMultiSelectValueChange} from "../Handlers/multiSelectHandler.jsx";

function useEventMultipleEventForm() {
    const [values, setValues] = useState({
        date_start: "",
        date_end: "",
        calendar_type: "",
        content_tags: "",
        audience_tags: "",
    });

    const handleStartDateChange = handleDateChange(setValues, 'date_start');
    const handleEndDateChange = handleDateChange(setValues, 'date_end');
    const handleSelectChange = handleSelectValueChange(setValues, 'calendar_type');
    const handleContentTagsChange = handleMultiSelectValueChange(setValues, 'content_tags');
    const handleAudienceTagsChange = handleMultiSelectValueChange(setValues, 'audience_tags');

    function handleSubmit(e) {
        e.preventDefault()

        router.post('/events/export-all', values, {
            preserveScroll: true,
        })
    }

    return {
        values,
        handleStartDateChange,
        handleEndDateChange,
        handleSelectChange,
        handleContentTagsChange,
        handleAudienceTagsChange,
        handleSubmit,
    };
}

export default useEventMultipleEventForm;
