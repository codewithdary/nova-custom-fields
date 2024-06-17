import PageHeader from "../../components/Helper/PageHeader.jsx";
import React from "react";
import Widget from "../../components/Dashboard/Widget.jsx";
import links from "../../data/links.jsx";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";

const Dashboard = () => {
    return (
        <AuthenticatedLayout>
            <div>
                <div>
                    <PageHeader
                        header="Dashboard"
                        subheader="BII user dashboard"
                    />

                    <div className="w-full pt-6">
                        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-5">
                            {links.map((link) => (
                                <FadeIn key={link.name}>
                                    <Widget
                                        icon={link.icon}
                                        href={link.href}
                                        name={link.name}
                                        type={link.type}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard