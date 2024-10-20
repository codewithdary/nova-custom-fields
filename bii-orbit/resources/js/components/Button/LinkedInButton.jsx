import React from 'react';
import {FaLinkedinIn} from "react-icons/fa6";

const LinkedInButton = ({ url, isSmall }) => {
    return (
        <a
            href={url}
            target="_blank"
            className={`${isSmall ? "anchor__small__circle" : "anchor__circle"}`}
        >
           <FaLinkedinIn
               className={`${isSmall ? "icon__extra__small stroke-1" : "icon__small"}`}
           />
        </a>
    );
};

export default LinkedInButton;
