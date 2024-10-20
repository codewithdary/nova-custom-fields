import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";

export const ChipSearchFilter = ({ items, params, updateParams, filterType }) => {
    const handleRemoveItem = (itemId) => {
        const updatedItems = items.filter(item => (typeof item === 'object' ? item.id !== itemId : item !== itemId));

        updateParams({
            ...params,
            [filterType]: updatedItems
        });
    };

    return (
        <>
            {items && items.map((item, index) => (
                <span key={index} className="chip__small inline-flex items-center space-x-1">
                    {typeof item === 'object' ? item.name : item}

                    <a onClick={() => handleRemoveItem(typeof item === 'object' ? item.id : item)}>
                        <XMarkIcon
                            className="pl-1 icon__small hover:cursor-pointer hover:text-light transition-all"
                        />
                    </a>
                </span>
            ))}
        </>
    );
};
