import React from "react";

export const Logo = ({ t, hasColor }) => {
    return (
        <img
            className="w-60 object-cover text-center mx-auto object-center"
            src={hasColor ? '/images/logo/bii_logo.png' : '/images/logo/bii_logo_white.png'}
            alt={t('logo_alt')}
        />
    );
}

export const CompanyLogo = ({ name, logoPath, className = '' }) => {
    return (
        <div className="flex items-center justify-center">
            <img
                alt={name}
                src={logoPath}
                className={`company__logo__small ${className}`}
            />
        </div>
    );
}

