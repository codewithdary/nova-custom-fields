import { useState } from 'react';
import {router} from "@inertiajs/react";
import {handleInputChange} from "./Handlers/inputHandler.jsx";
import {handleImageValueChange} from "./Handlers/imageHandler.jsx";
import {handleSelectValueChange} from "./Handlers/selectHandler.jsx";
import {handleCheckboxValueChange} from "./Handlers/checkboxHandler.jsx";
import {handleRadioButtonChange} from "./Handlers/radioButtonHandler.jsx";
import {handleMultiSelectValueChange} from "./Handlers/multiSelectHandler.jsx";
import {handleEditorValueChangeLocal, handleContentValueChange} from "./Handlers/descriptionHandler.jsx"

function useNewsForm({...props}) {
    const [values, setValues] = useState({
        title: props.news?.title ?? "",
        tags: props.news?.content_tags ?? "",
        image: props.news?.image ?? "",
        visibility: props.news?.visibility ?? "",
        content: props.news?.content ?? "",
        is_published: props.news?.is_published ?? "",
        is_synchronized: props.news?.is_published ?? 0,
    });

    const handleChange = handleInputChange(setValues);
    const handleRadioChange = handleRadioButtonChange(setValues);
    const handleEditorChangeLocal = handleEditorValueChangeLocal(setValues, props);
    const handleContentChange = handleContentValueChange(setValues, 'content');
    const handleSelectChange = handleSelectValueChange(setValues, 'visibility');
    const handleCheckboxChange = handleCheckboxValueChange(setValues, 'is_synchronized');
    const handleMultiSelectChange = handleMultiSelectValueChange(setValues, 'tags');
    const handleImageChange = handleImageValueChange(setValues);

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
        handleChange,
        handleRadioChange,
        handleSelectChange,
        handleSubmit,
        handleEditorChangeLocal,
        handleContentChange,
        handleCheckboxChange,
        handleMultiSelectChange,
        handleImageChange
    };
}

export default useNewsForm;
