import React from "react";

export function TagRow({ tags }) {
    return (
        <div className="sm:mt-0 w-11/12 py-4 mx-auto">
            {tags.map((tag) => (
                <span className="rounded-md bg-dark px-2 py-1 mb-2 text-white text-xs mr-3 inline-block ">
                    {tag.name}
                </span>
            ))}
        </div>
    )
}

