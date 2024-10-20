import React from "react";

export const Initials = ({ avatarSrc, user, initials = '', isBigAvatar = false }) => {
    if (user && user.auth && user.auth.user) {
        initials = user.auth.user.firstname.charAt(0).toUpperCase() + user.auth.user.lastname.charAt(0).toUpperCase();
    }

    return (
        <>
            {avatarSrc ? (
                <img
                    src={avatarSrc}
                    alt={avatarSrc}
                    className={`${isBigAvatar ? "inline-block avatar__big" : "inline-block avatar"}`}
                />
            ) : (
                <span
                    className={`${isBigAvatar ? "avatar__big text-base" : "avatar"} shrink-0 text-normal items-center text-center justify-center border border-primary transition-all bg-primary hover:bg-primary-hover text-[0.625rem] text-white font-extrabold
                    `}
                >
                    {initials}
                </span>
            )}
        </>
    );
}

export const getInitials = (fullName) => {
    if (!fullName) return '';
    return fullName.split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase())
        .join('');
};

