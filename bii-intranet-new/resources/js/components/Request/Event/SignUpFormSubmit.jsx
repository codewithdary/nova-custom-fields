import { useState } from 'react';
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";

function useEventSignUpForm(event_id, isLoggedParticipant) {
    const [value, setValue] = useState({
        event_id: event_id,
    });

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/events/sign-up', value, {
            preserveScroll: true,
            onSuccess: toast(isLoggedParticipant ?
                "You have successfully been signed off for the selected event." :
                "You have successfully signed up for the selected event")
        })
    }

    return {
        value,
        handleSubmit,
    };
}

export default useEventSignUpForm;
