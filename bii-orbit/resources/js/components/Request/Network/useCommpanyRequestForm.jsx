import { useState } from 'react';
import {useHandleSubmit} from "../../../helper/Filter/FilterHelper.jsx";
import { getValuesFromQuery } from "../../../helper/Filter/QueryParam.jsx";
import handleFieldChangeGeneric from "../Handlers/handleFieldChangeGeneric";

const useCompanyRequestForm = (endpoint) => {
    const queryParams = new URLSearchParams(window.location.search);

    const [values, setValues] = useState({
        categories: getValuesFromQuery(queryParams, 'programs'),
        cohorts: getValuesFromQuery(queryParams, 'cohorts'),
        impacts: getValuesFromQuery(queryParams, 'impacts'),
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

export default useCompanyRequestForm;
