import React from "react";
import {MinusIcon} from "@heroicons/react/16/solid/index.js";
import {PlusIcon} from "@heroicons/react/24/outline/index.js";

export default function PlusMinusIcon({ showOptions, toggleOptions }) {
    return (
        showOptions ? (
            <MinusIcon
                onClick={toggleOptions}
                className="w-4 stroke-2 text-primary pt-1.5 hover:cursor-pointer transition-all hover:text-primary-hover"
                aria-hidden="true"
            />
        ) : (
            <PlusIcon
                onClick={toggleOptions}
                className="w-4 stroke-2 text-primary pt-1.5 hover:cursor-pointer transition-all hover:text-primary-hover"
                aria-hidden="true"
            />
        )
    );
}
