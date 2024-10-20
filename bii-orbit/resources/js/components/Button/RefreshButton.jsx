import React from "react";
import {ButtonIconDefault} from "./ButtonIconDefault.jsx";
import {ArrowPathIcon} from "@heroicons/react/24/outline/index.js";

export default function RefreshButton({route, buttonClassName = '', type, text }) {
    return (
        <a href={route}>
            <ButtonIconDefault
                type={type}
                text={text}
                buttonClassName={buttonClassName}
                icon={<ArrowPathIcon className="text-white w-5 h-5" />}
            />
        </a>
    );
}
