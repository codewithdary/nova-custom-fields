import React from "react";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";

export const ResetFilter = ({ resetFiltersUrl, text }) => {
    return (
        <a
            href={resetFiltersUrl}
            className="first after flex items-center text-primary hover:text-light font-semibold transition-all text-sm">
            {text}

            <XMarkIcon
                className="w-4 ml-0.5 mt-0.5 text-primary stroke-2"
            />
        </a>
    )
}
