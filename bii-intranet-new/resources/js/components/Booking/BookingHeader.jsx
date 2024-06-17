import React from "react";

function BookingHeader({ title, description = null }) {
    return (
        <>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-primary-header sm:text-4xl w-4/5 mx-auto">
                {title}
            </h2>

            {description && (
                <p className="pb-6 sm:pb-0 mt-6 sm:mt-10 text-sm font-semibold text-primary-header">
                    {description}
                </p>
            )}
        </>
);
}

export default BookingHeader;
