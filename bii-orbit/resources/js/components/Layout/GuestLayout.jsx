import 'react-toastify/dist/ReactToastify.css';
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GradientBackground } from "./GradientBackground.jsx";
import { Button } from "@material-tailwind/react";

export default function GuestLayout({ title, children, className = '', parentClassName = '', handleSubmit, blockTitle, blockDescription, btnText }) {
    const { flash } = usePage().props;
    const [messageShown, setMessageShown] = useState(false);


    useEffect(() => {
        if (flash?.message && !messageShown) {
            toast(flash.message);
            setMessageShown(true);
        }
    }, [flash, messageShown]);

    return (
        <div>
            <Head
                title={title}
            />

            <main className={`overflow-hidden bg-background-color ${parentClassName}`}>
                <GradientBackground />

                <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
                    <div className={`w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5 ${className}`}>
                        <form onSubmit={handleSubmit} className="p-4 sm:p-11">
                            <h1 className="mt-8 text-base/6 font-bold text-center">
                                {blockTitle}
                            </h1>

                            <p className="mt-1 text-sm/5 text-paragraph text-center">
                                {blockDescription}
                            </p>

                            {children}

                            <div className="mt-6">
                                <Button type="submit" fullWidth className="w-full bg-primary">
                                    {btnText}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}
