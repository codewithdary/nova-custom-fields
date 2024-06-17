import {Sidebar} from "../Sidebar/Sidebar";
import React, {useEffect, useState} from "react";
import {Footer} from "./Footer";
import {Notification} from "../Form/Notification";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {usePage} from "@inertiajs/react";

export default function AuthenticatedLayout({children}) {
    const { flash } = usePage().props
    const [messageShown, setMessageShown] = useState(false);

    useEffect(() => {
        if (flash.message && !messageShown) {
            toast(flash.message);
            setMessageShown(true);
        }
    }, [flash.message, messageShown]);

    return (
        <div>
            <Sidebar />

            <div className="fixed right-10 top-4 z-50">
                <Notification />
            </div>

            <div className="lg:pl-64">
                <main className="h-max-content py-6 mx-auto">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>

            <Footer />

            <ToastContainer />
        </div>
    );
}
