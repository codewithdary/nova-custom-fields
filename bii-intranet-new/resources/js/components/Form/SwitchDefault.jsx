import {Input, Typography} from "@material-tailwind/react";
import React from "react";
import { Switch } from "@material-tailwind/react";

export const SwitchDefault = ({id, label, description, required, type, name, isDisabled = false, value, onChange, error, defaultValue, icon = null, onBlur = null}) => {
    return (
        <div className="pb-6 sm:pb-0 font-poppins">
            <Switch
                label={
                    <div>
                        <Typography color="blue-gray" className="block antialiased text-base leading-relaxed font-bold font-poppins text-nav">
                            {label}
                        </Typography>
                        {description && (
                            <Typography variant="small" color="gray" className="block antialiased text-sm leading-normal font-poppins text-nav font-normal">
                                {description}
                            </Typography>
                        )}
                    </div>
                }
                name={name}
                disabled={isDisabled}
                type={type}
                id={id}
                ripple={false}
                onChange={onChange}
                className="h-full w-full checked:bg-nav focus:outline-0"
                containerProps={{
                    className: "w-11 h-6",
                }}
                circleProps={{
                    className: "before:hidden left-0.5 border-none",
                }}
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
        // <div className="pb-6 sm:pb-0 font-poppins border-nav">
        //     <Input
        //         id={id}
        //         name={name}
        //         type={type}
        //         value={value}
        //         label={label}
        //         onBlur={onBlur}
        //         icon={
        //             icon
        //         }
        //         onChange={onChange}
        //         required={required}
        //         disabled={isDisabled}
        //         default={defaultValue}
        //         className="bg-white focus:ring-0"
        //     />
        //
        //     {error && <div className="text-warning text-xs pt-2">
        //         {error}
        //     </div>}
        // </div>
    );
}