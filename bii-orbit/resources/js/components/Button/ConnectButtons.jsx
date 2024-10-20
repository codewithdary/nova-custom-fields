import React from "react";
import MailButton from "./MailButton.jsx";
import PhoneButton from "./PhoneButton.jsx";
import LinkedInButton from "./LinkedInButton.jsx";

export function ConnectButtons({ phoneNumber, mailUrl, linkedInUrl, isSmall = false, className = '' }) {
    return (
        <div className={`inline-flex gap-2 pb-6 sm:pb-0 ${className}`}>
            {phoneNumber && (
                <PhoneButton
                    isSmall={isSmall}
                    phoneNumber={phoneNumber}
                />
            )}

            {mailUrl && (
                <MailButton
                    url={mailUrl}
                    isSmall={isSmall}
                />
            )}

            {linkedInUrl && (
                <LinkedInButton
                    url={linkedInUrl}
                    isSmall={isSmall}
                />
            )}
        </div>
    );
}
