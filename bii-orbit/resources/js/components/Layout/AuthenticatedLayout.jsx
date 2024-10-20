import React from "react";
import Footer from "./Footer/Footer.jsx";
import {RootLayout} from "./RootLayout.jsx";
import {useTranslation} from "react-i18next";
import {ToastContainer} from "react-toastify";
import {Head, usePage} from "@inertiajs/react";
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from "../../helper/Text/PageHeader.jsx";
import Navigation from "./Navigation/Desktop/Navigation.jsx";
import {BoardGuidelinesModal} from "../Modal/Board/BoardGuidelinesModal.jsx";

export default function AuthenticatedLayout({ hasAdditionalExplanationButton, title, children, header, subheader }) {
    const { t } = useTranslation();
    const { auth } = usePage().props

    return (
        <div>
            <Head title={title} />

            <div className="md:hidden">
                <RootLayout>
                    {children}
                </RootLayout>
            </div>

            <div>
                <Navigation
                    t={t}
                    auth={auth}
                />

                <div className="mx-auto w-11/12 sm:w-11/12 md:w-[768px] lg:w-[900px] xl:w-[1300px] hidden md:block">
                    <div className="mx-auto">
                        <div className="relative pt-28">
                            {hasAdditionalExplanationButton && (
                                <div className="flex items-center float-right text-primary font-semibold mt-4">
                                    <BoardGuidelinesModal
                                        t={t}
                                        isOpen={false}
                                    />
                                </div>
                            )}

                            {(header && subheader) && (
                                <PageHeader
                                    header={header}
                                    subheader={subheader}
                                />
                            )}

                            {children}
                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer />

            <Footer
                t={t}
                auth={auth}
            />
        </div>
    );
}
