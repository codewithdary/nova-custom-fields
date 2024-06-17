import React, {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {usePage} from "@inertiajs/react";
import {toast, ToastContainer} from "react-toastify";

export default function GuestLayout({children}) {
    const { flash } = usePage().props
    const [messageShown, setMessageShown] = useState(false);

    useEffect(() => {
        if (flash && flash.message && !messageShown) {
            toast(flash.message);
            setMessageShown(true);
        }
    }, [flash, messageShown]);

    return (
        <div>
            <main className="py-10 mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}
