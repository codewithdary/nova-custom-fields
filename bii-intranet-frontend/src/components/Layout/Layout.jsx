import {Sidebar} from "../Sidebar/Sidebar";
import React from "react";
import {Footer} from "./Footer";
import {Notification} from "../Form/Notification";

export default function Layout({ children }) {
    return (
        <div>
            <Sidebar />

            <div className="fixed right-10 top-4 z-50">
                <Notification />
            </div>

            <div className="lg:pl-64">
                <main className="py-10 mx-auto">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}