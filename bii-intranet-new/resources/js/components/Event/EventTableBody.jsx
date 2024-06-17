import React from "react";
import {Typography} from "@material-tailwind/react";
import {CalendarToolTip} from "./CalendarToolTip.jsx";
import {LinkIcon} from "@heroicons/react/24/outline/index.js";
import {EventDropdownMenu} from "./EventDropdownMenu.jsx";

export function EventTableBody({ isBiiUser, events }) {
    return (
        <tbody>
            {events.data.map(
                (event) => {
                    const isLast = event.id === events.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                    return (
                        <tr key={event.id}>

                            <td className={classes}>
                                <CalendarToolTip
                                    text={event.human_date_start}
                                    month={event.human_month_start + " " + event.human_year_start}
                                    day={event.human_day_start}
                                />
                            </td>

                            <td className={classes}>
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="small"
                                            className="font-poppins text-nav font-bold">
                                            {event.event_title}
                                        </Typography>

                                        <Typography
                                            variant="small"
                                            className="font-poppins font-normal text-paragraph">
                                            {event.location}
                                        </Typography>
                                    </div>
                                </div>
                            </td>

                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography
                                        className="font-poppins text-nav font-bold"
                                        variant="small">
                                        {event.host_name}
                                    </Typography>
                                </div>
                            </td>

                            <td className={classes}>
                                <div className="flex items-center">
                                    <Typography variant="small" className="font-poppins text-nav font-bold pr-2">
                                        {event.participants_count}
                                    </Typography>

                                    {isBiiUser && (
                                        <a href="">
                                            <LinkIcon
                                                className="font-poppins text-nav font-bold pr-2 w-6"
                                            />
                                        </a>
                                    )}
                                </div>
                            </td>

                            <td className={classes}>
                                {event.is_published ? (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-green-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <p className="font-poppins text-nav font-bold">
                                            Published
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-red-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        </div>
                                        <p className="font-poppins text-nav font-bold">
                                            Draft
                                        </p>
                                    </div>
                                )}
                            </td>

                            <td className={classes}>
                                <EventDropdownMenu
                                    isBiiUser={isBiiUser}
                                    event={event}
                                />
                            </td>
                        </tr>
                    );
                },
            )}
        </tbody>
    );
}