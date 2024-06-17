import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleDateChange} from "../Handlers/dateHandler.jsx";
import {handleInputChange} from "../Handlers/inputHandler.jsx";
import {handleImageValueChange} from "../Handlers/imageHandler.jsx";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";
import {handleCheckboxValueChange} from "../Handlers/checkboxHandler.jsx";
import {handleRadioButtonChange} from "../Handlers/radioButtonHandler.jsx";
import {handleMultiSelectValueChange} from "../Handlers/multiSelectHandler.jsx";
import {handleContentValueChange, handleEditorValueChangeLocal} from "../Handlers/descriptionHandler.jsx"

function useEventForm({...props}) {
    const [values, setValues] = useState({
        image: props.events?.image ?? "",
        title: props.events?.title ?? "",
        type: props.events?.types ?? "",
        date_start: props.events?.date_start ?? "",
        time_start: props.events?.time_start ?? "",
        date_end: props.events?.date_end ?? "",
        time_end: props.events?.time_end ?? "",
        is_all_day: props.events?.is_all_day ?? false,
        frequency: props.events?.frequency ?? "Single",
        location: props.events?.location ?? "",
        join_url: props.events?.join_url ?? "",
        host_name: props.events?.host_name ?? "",
        host_email: props.events?.host_email ?? "",
        agenda_desc: props.events?.agenda_desc ?? "",
        is_published: props.events?.is_published ?? "",
        is_informative: props.events?.is_informative ?? false,
    });

    const handleChange = handleInputChange(setValues);
    const handleTypeSelectChange = handleSelectValueChange(setValues, 'type');
    const handleStartDateChange = handleDateChange(setValues, 'date_start');
    const handleEndDateChange = handleDateChange(setValues, 'date_end');
    const handleStartTimeSelectChange = handleSelectValueChange(setValues, 'time_start');
    const handleEndTimeSelectChange = handleSelectValueChange(setValues, 'time_end');
    const handleFrequencySelectChange = handleSelectValueChange(setValues, 'frequency');
    const handleCheckboxChange = handleCheckboxValueChange(setValues, 'is_all_day');
    const handleNotifyCheckboxChange = handleCheckboxValueChange(setValues, 'is_informative');
    const handleLocationChange = handleInputChange(setValues);
    const handleAudienceTagsChange = handleMultiSelectValueChange(setValues, 'company_tags');
    const handleContentTagsChange = handleMultiSelectValueChange(setValues, 'content_tags');
    const handleJoinUrlChange = handleInputChange(setValues);
    const handleHostNameChange = handleInputChange(setValues);
    const handleHostEmailChange = handleInputChange(setValues);
    const handleRadioChange = handleRadioButtonChange(setValues);
    const handleAboutEditorChangeLocal = handleEditorValueChangeLocal(setValues, props);
    const handleAboutContentChange = handleContentValueChange(setValues, 'about');
    const handleAgendaDescEditorChangeLocal = handleEditorValueChangeLocal(setValues, props);
    const handleAgendaDescContentChange = handleContentValueChange(setValues, 'agenda_desc');

    const handleImageChange = handleImageValueChange(setValues);

    function handleSubmit(e) {
        e.preventDefault()

        if(props.events) {
            router.patch(`/events/${props.events.id}`, values, {
                preserveScroll: true
            })
        } else {
            router.post('/events', values, {
                preserveScroll: true,
            })
        }
    }

    return {
        values,
        handleSubmit,
        handleChange,
        handleLocationChange,
        handleTypeSelectChange,
        handleStartTimeSelectChange,
        handleEndTimeSelectChange,
        handleFrequencySelectChange,
        handleContentTagsChange,
        handleAudienceTagsChange,
        handleStartDateChange,
        handleEndDateChange,
        handleCheckboxChange,
        handleImageChange,
        handleJoinUrlChange,
        handleHostNameChange,
        handleHostEmailChange,
        handleAgendaDescEditorChangeLocal,
        handleAgendaDescContentChange,
        handleAboutEditorChangeLocal,
        handleAboutContentChange,
        handleRadioChange,
        handleNotifyCheckboxChange
    };
}

export default useEventForm;
