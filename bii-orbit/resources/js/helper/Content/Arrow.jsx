import React from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline/index.js";
import { ArrowLeftIcon } from "@heroicons/react/24/outline/index.js";
import {ChevronDownIcon} from "@heroicons/react/16/solid";

export const ArrowRightIconBlock = ({ url, className, withBackground = true, text = null }) => {
    return (
        <div className={`${className}`}>
            {withBackground ? (
                <a
                    href={url}
                    className="anchor inline-block bg-secondary p-1.5 rounded-full item__scale hover:shadow-md transition-all"
                >
                    <ArrowRightIcon
                        className="w-3 h-3 text-primary"
                    />
                </a>
            ) : (
                <a
                    href={url}
                    className="first after text-paragraph text-xs hover:cursor-pointer font-bold inline-flex items-center space-x-2 relative group"
                >
                    {text}

                    <ArrowRightIcon
                        className="ml-2 w-4 h-4 stroke-2"
                    />
                </a>
            )}
        </div>
    );
}

export function ArrowLeftIconBlock({ route, text, className = "" }) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <ArrowLeftIcon
                className="p-1.5 rounded-full stroke-2 w-6 text-primary"
            />

            <a href={route} className="text-sm text-primary font-bold first after">
                {text}
            </a>
        </div>
    );
}

export function ArrowOpenIcon({ id, open }) {
    return (
        <span
            className={`${id === open ? "anchor__circle" : "anchor__circle bg-white"}`}
        >
            <ChevronDownIcon
                className={`${id === open ? "rotate-0" : "-rotate-90"} h-5 w-5 transition-transform`}
            />
        </span>
    );
}
