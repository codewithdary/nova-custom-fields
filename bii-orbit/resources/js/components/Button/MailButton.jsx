import React from 'react';
import {EnvelopeIcon} from "@heroicons/react/24/outline";

const WebsiteButton = ({ url, isSmall }) => {
    return (
        <a
            target="_blank"
            href={`mailto:${url}`}
            className={`${isSmall ? "anchor__small__circle" : "anchor__circle"}`}
        >
            <EnvelopeIcon
                className={`${isSmall ? "icon__extra__small" : "icon__small"}`}
            />
        </a>
    );
};

export default WebsiteButton;
