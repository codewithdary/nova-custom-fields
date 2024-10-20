import React from 'react';
import {FiPhoneCall} from "react-icons/fi";

const PhoneButton = ({ phoneNumber, isSmall }) => {
    return (
        <a
            target="_blank"
            href={`tel:${phoneNumber}`}
            className={`${isSmall ? "anchor__small__circle" : "anchor__circle"}`}
        >
            <FiPhoneCall
                className={`${isSmall ? "icon__extra__small" : "icon__small"}`}
            />
        </a>
    );
};

export default PhoneButton;
