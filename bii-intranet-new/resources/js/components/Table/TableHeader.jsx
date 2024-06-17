import {Typography} from "@material-tailwind/react";
import {ChevronUpDownIcon} from "@heroicons/react/24/outline";
import React from "react";

export const TableHeader = ({headers}) => {
    <thead>
    <tr>
        {headers.map((head, index) => (
            <th
                key={head}
                className="cursor-pointer border-y border-nav-hover bg-light p-4 transition-colors hover:bg-light">
                <Typography
                    variant="small"
                    className="text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                    {head}{" "}
                    {index !== headers.length - 1 && (
                        <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                        />
                    )}
                </Typography>
            </th>
        ))}
    </tr>
    </thead>
}