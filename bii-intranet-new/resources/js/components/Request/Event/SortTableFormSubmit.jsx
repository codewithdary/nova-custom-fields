import {useEffect, useState} from 'react';
import {router} from "@inertiajs/react";

function useEventTableSort(userId) {
    const endpoint = window.location.pathname;
    const [events, setEvents] = useState([]);
    const [values, setValues] = useState({
        column: "",
        direction: "",
    });

    const handleSort = (column) => {
        setValues(prevValues => ({
            column,
            direction: prevValues.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    useEffect(() => {
        if (values.column && values.direction) {
            handleSubmit();
        }
    }, [values]);

    function handleSubmit() {
        router.get(endpoint, values, {
            preserveState: true,
            preserveScroll: true,
        });
    }


    return {
        values,
        events,
        handleSort,
        handleSubmit,
    };
}

export default useEventTableSort;
