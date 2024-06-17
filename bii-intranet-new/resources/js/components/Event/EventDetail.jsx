import React from "react";

export function EventDetail({ icon, content }) {
    return (
        <div className="mt-2 flex items-center text-sm text-nav w-full pb-1">
            {icon}

            {content}
        </div>
    );
}