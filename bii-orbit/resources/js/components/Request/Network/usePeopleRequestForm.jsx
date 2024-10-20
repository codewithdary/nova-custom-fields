import { useState } from 'react';
import {useHandleSubmit} from "../../../helper/Filter/FilterHelper.jsx";
import { getValuesFromQuery } from "../../../helper/Filter/QueryParam.jsx";
import handleFieldChangeGeneric from "../Handlers/handleFieldChangeGeneric";

const usePeopleRequestForm = (endpoint) => {
    const queryParams = new URLSearchParams(window.location.search);

    const [values, setValues] = useState({
        categories: getValuesFromQuery(queryParams, 'categories'),
        cohorts: getValuesFromQuery(queryParams, 'cohorts'),
        kths: getValuesFromQuery(queryParams, 'kths'),
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

export default usePeopleRequestForm;
