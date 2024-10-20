import React from "react";
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function EventDataBlock({ humanDate, time, location, className = '', iconClass = 'w-4 h-4' }) {
    const items = [
        { icon: CalendarDaysIcon, text: humanDate },
        { icon: ClockIcon, text: time },
        { icon: MapPinIcon, text: location },
    ];

    return (
        <div className={`block__info ${className}`}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <item.icon
                        className={iconClass}
                    />

                    <span>
                        {item.text}
                    </span>
                </React.Fragment>
            ))}
        </div>
    );
}
