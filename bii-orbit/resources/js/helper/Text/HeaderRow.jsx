import React from "react";

export function HeaderRow({ title, subtitle, titleClass }) {
    return (
        <div>
            <div className="px-0 sm:gap-4 sm:px-0 mx-auto">
                <dt className={`block_title ${titleClass ? titleClass : ''} ${!subtitle ? 'pb-2' : ''}`}>
                    {title}
                </dt>

                {subtitle && (
                    <dd className="subheader">
                        {subtitle}
                    </dd>
                )}
            </div>
        </div>
    )
}
