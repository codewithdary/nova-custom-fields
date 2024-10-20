import React from "react";
import RefreshButton from "../../Button/RefreshButton.jsx";

export default function EventEmptyMessageBlock({ t, unavailableMessage }) {
    return (
        <div className="relative items-center space-x-3 rounded-2xl border border-stroke bg-white px-5 py-4 shadow-sm transition-all item__scale mb-4">
            <span className="block__info !text-primary-hover !text-sm">
                {unavailableMessage}
            </span>

            <RefreshButton
                type="button"
                text={t('my_bii_program')}
                route={route('venture-program.index')}
            />
        </div>
    );
}
