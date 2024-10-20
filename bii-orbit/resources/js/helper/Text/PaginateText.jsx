import React from "react";

export default function PaginateText({ text }) {
    return (
        <div className="pt-4 md:pt-6">
            <p className="text-primary font-semibold text-sm">
                {text}
            </p>
        </div>
    )
}
