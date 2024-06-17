import { useState } from 'react';
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";

function useEventStatusForm(eventId, eventStatus) {
    const [eventStatusValue, setEventStatus] = useState({
        status: eventStatus,
        event_id: eventId
    });

    function handleStatusSubmit(e) {
        e.preventDefault()

        setEventStatus({ ...eventStatusValue, status: !eventStatusValue.status });

        router.post('/events/status', eventStatusValue, {
            preserveScroll: true,
            onSuccess: toast("Event status updated. All participants have been informed through email.")
        })
    }

    return {
        eventStatusValue,
        handleStatusSubmit,
    };
}

export default useEventStatusForm;
