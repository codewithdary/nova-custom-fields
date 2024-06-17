import React from "react";

export function HeaderRow({ title, subtitle }) {
    return (
        <dl className="border-b border-border-color">
            <div className="px-4 py-4 sm:gap-4 sm:px-0 w-11/12 mx-auto">
                <dt className="text-sm font-medium leading-6 text-primary-header">
                    {title}
                </dt>

                {subtitle && (
                    <dd className="mt-1 text-sm leading-6 text-nav sm:col-span-2 sm:mt-0">
                        {subtitle}
                    </dd>
                )}
            </div>
        </dl>
    )
}
