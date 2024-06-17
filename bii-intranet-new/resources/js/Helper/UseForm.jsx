import {router} from "@inertiajs/react";

export function useForm(value, url) {
    function handleSubmit(e) {
        e.preventDefault();
        router.post(url, value);
    }

    return {
        value,
        handleSubmit,
    };
}
