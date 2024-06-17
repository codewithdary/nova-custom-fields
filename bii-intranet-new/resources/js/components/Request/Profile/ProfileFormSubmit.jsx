import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleInputChange} from "../Handlers/inputHandler.jsx";
import {handleImageValueChange} from "../Handlers/imageHandler.jsx";
import {handleSelectValueChange} from "../Handlers/selectHandler.jsx";
import {handleCheckboxValueChange} from "../Handlers/checkboxHandler.jsx";
import {handleRadioButtonChange} from "../Handlers/radioButtonHandler.jsx";
import {handleMultiSelectValueChange} from "../Handlers/multiSelectHandler.jsx";
import {handleEditorValueChangeLocal, handleContentValueChange} from "../Handlers/descriptionHandler.jsx"

function useProfileForm({...props}) {
    const [values, setValues] = useState({
        firstname: props.current?.firstname ?? "",
        lastname: props.current?.lastname ?? "",
        gender: props.current?.gender ?? "",
        country: props.current?.country ?? "",
        linkedin_url: props.current?.linkedin_url ?? "",
        description: props.current?.description ?? "",
    });

    console.log(values)

    const handleFirstNameChange = handleInputChange(setValues);
    const handleLastNameChange = handleInputChange(setValues);
    const handleGenderSelectChange = handleSelectValueChange(setValues, 'gender');
    const handleCountrySelectChange = handleSelectValueChange(setValues, 'country');
    const handleLinkedinUrlChange = handleInputChange(setValues);
    const handleDescriptionEditorChangeLocal = handleEditorValueChangeLocal(setValues, props);
    const handleDescriptionContentChange = handleContentValueChange(setValues, 'description');
    const handleContentTagsChange = handleMultiSelectValueChange(setValues, 'content_tags');
    const handleCompanyTagsMultiSelectChange = handleMultiSelectValueChange(setValues, 'company_tags');
    const handleSkillsMultiSelectChange = handleMultiSelectValueChange(setValues, 'company_tags');


    function handleSubmit(e) {
        e.preventDefault()

        if(props.news) {
            router.patch(`/news/${props.news.id}`, values, {
                preserveScroll: true
            })
        } else {
            router.post('/news', values, {
                preserveScroll: true
            })
        }
    }

    return {
        values,
        handleSubmit,
        handleFirstNameChange,
        handleLastNameChange,
        handleGenderSelectChange,
        handleCountrySelectChange,
        handleLinkedinUrlChange,
        handleDescriptionEditorChangeLocal,
        handleDescriptionContentChange,
        handleContentTagsChange,
        handleCompanyTagsMultiSelectChange,
        handleSkillsMultiSelectChange
    };
}

export default useProfileForm;
