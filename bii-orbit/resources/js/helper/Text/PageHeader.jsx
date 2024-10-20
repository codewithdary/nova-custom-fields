import React from "react";
import {TabRow} from "../../components/Layout/Navigation/TabRow.jsx";

export default function PageHeader({ header, subheader, tabs, user, description }) {
    return (
        <>
            <div className="border-b border-menu mb-6">
                <span className="text-[9px] tracking-widest text-primary-hover text-pretitle uppercase">
                    {subheader}
                </span>

                <h1 className="text-4xl tracking-wide font-bold text-primary pb-4">
                    {header}
                </h1>

                {description && (
                    <p className="text-paragraph text-sm leading-8">
                        {description}
                    </p>
                )}

                {tabs && (
                    <TabRow
                        user={user}
                        tabs={tabs}
                    />
                )}
            </div>
        </>
    );
}
