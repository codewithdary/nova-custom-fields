import React from "react";
import {Typography} from "@material-tailwind/react";
import {ChevronUpDownIcon} from "@heroicons/react/24/outline/index.js";
import useEventTableSort from "../Request/Event/SortTableFormSubmit.jsx";
import eventTableHeaders from "../../data/eventTableHeaders.jsx";

export function EventTableHeaders({ userId }) {
    const { values, handleSort, handleSubmit } = useEventTableSort(userId);
    const headers = eventTableHeaders;
    const headerKeys = Object.keys(headers);

    return (
        <thead>
            <tr>
                {Object.keys(headers).map((key, index) => (
                    <th
                        key={key}
                        className="cursor-pointer border-y border-nav-hover bg-light p-4 transition-colors hover:bg-light"
                        onClick={key !== 'signups' ? () => handleSort(headerKeys[index]) : null}>
                        {key !== 'signups' && (
                            <form onSubmit={handleSubmit}>
                                <Typography
                                    variant="small"
                                    className="text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                                    {headers[key]}{" "}
                                    {headers[key]  && key !== headers.length - 1 && (
                                        <ChevronUpDownIcon
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    )}
                                </Typography>

                                <input
                                    type="hidden"
                                    name="column"
                                    value={key}
                                    onChange={handleSort}
                                />

                                <input
                                    type="hidden"
                                    name="direction"
                                    value={values.direction}
                                    onChange={handleSort}
                                />
                            </form>
                        )}
                        {key === 'signups' && (
                            <Typography
                                variant="small"
                                className="hover:cursor-default text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                                {headers[key]}{" "}
                            </Typography>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
