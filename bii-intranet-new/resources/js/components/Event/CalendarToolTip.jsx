import {Tooltip} from "@material-tailwind/react";
import React from "react";

export const CalendarToolTip = ({text, month, day}) => {
    return(
        <Tooltip content={text}>
            <div className="divide-y divide-gray-100 w-16 rounded-md opacity-50 text-center shadow-xl">
                <div className="bg-nav rounded-tl-lg rounded-tr-lg">
                    <span className="font-poppins  text-xs text-light font-bold">
                        {month}
                    </span>
                </div>

                <div className="bg-gray-50 rounded-bl-lg rounded-br-lg text-xs font-bold py-2">
                    {day}
                </div>
            </div>
        </Tooltip>
    );
}