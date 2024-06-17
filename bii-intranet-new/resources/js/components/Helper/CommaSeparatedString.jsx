import React from "react";

export function CommaSeparatedString({ label = null, options }) {
    return (
        <span>
            {label} {options.map((tag, index, array) => {
                return index === array.length - 1 ? tag.name : `${tag.name}, `;
            }).join('')}
        </span>
    );
}
