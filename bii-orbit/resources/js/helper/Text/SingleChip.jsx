import React from "react";
import TitleBlock from "../../components/Content/TitleBlock.jsx";

export const SingleChip = ({ text, className = '', rows = null, title, icon }) => {
    const chips = rows ? rows : [{ name: text }];

    return (
        <>
            <div>
                {title && (
                    <TitleBlock
                        icon={icon}
                        header={title}
                    />
                )}
            </div>

            {chips.map((tag, index) => (
                <span
                    key={index}
                    className={`chip__small m-0 mb-2 ${className}`}
                >
                    <div>
                        {tag.name}
                    </div>
                </span>
            ))}
        </>
    );
};
