import { useState } from 'react';
import {useHandleSubmit} from "../../../helper/Filter/FilterHelper.jsx";
import { getValuesFromQuery } from "../../../helper/Filter/QueryParam.jsx";
import handleFieldChangeGeneric from "../Handlers/handleFieldChangeGeneric";

const useNewsRequestForm = (endpoint) => {
    const queryParams = new URLSearchParams(window.location.search);

    const [values, setValues] = useState({
        contentTags: getValuesFromQuery(queryParams, 'contentTags'),
        search: queryParams.get('search') ?? undefined
    });

    const { handleSubmit } = useHandleSubmit(endpoint, values, setValues);

    return {
        values,
        handleSubmit,
        setValues,
        handleFieldChangeGeneric: handleFieldChangeGeneric(setValues),
    };
};

export default useNewsRequestForm;
