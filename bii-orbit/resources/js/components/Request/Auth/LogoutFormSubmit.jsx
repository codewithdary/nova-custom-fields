import {router} from "@inertiajs/react";

function useLogOutForm() {
    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('logout'), null, { preserveScroll: true });
    }

    return {
        handleSubmit,
    };
}

export default useLogOutForm;
