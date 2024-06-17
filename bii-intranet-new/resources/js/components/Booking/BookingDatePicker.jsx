import {DayPicker} from "react-day-picker";

function BookingDatePicker() {
    const [date, setDate] =  React.useState("");

    return (
        <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            className="border-0 bg-light rounded-lg shadow-xl p-2"
            classNames={{
                caption: "flex justify-center py-2 mb-4 relative items-center",
                caption_label: "text-sm font-medium text-nav",
                nav: "flex items-center",
                nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                nav_button_previous: "absolute left-1.5 text-nav",
                nav_button_next: "absolute right-1.5 text-nav",
                table: "w-full border-collapse",
                head_row: "flex font-medium text-nav",
                head_cell: "m-0.5 w-9 font-normal text-sm",
                row: "flex w-full",
                cell: "text-nav rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal",
                day_range_end: "day-range-end",
                day_selected:
                    "rounded-md bg-nav text-white hover:bg-nav-hover hover:text-white focus:bg-nav focus:text-white",
                day_today: "rounded-md bg-gray-200 text-gray-900",
                day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                day_disabled: "text-gray-500 opacity-50",
                day_hidden: "invisible",
            }}
            components={{
                IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                ),
                IconRight: ({ ...props }) => (
                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                ),
            }}
        />
    );
}

import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline/index.js";

export default BookingDatePicker;
