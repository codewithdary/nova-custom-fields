import { Input } from "@material-tailwind/react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import React from "react";

export const InputWithIconDefault = ({id, label, required, type, name, isDisabled = false, value, onChange, error, defaultValue}) => {
    return (
        <div className="pb-6 sm:pb-0 font-poppins border-nav">
            <Input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                disabled={isDisabled}
                default={defaultValue}
                className="bg-white focus:ring-0"
                label={label}
                icon={
                    <MagnifyingGlassIcon
                        className="h-5 w-5"
                    />
                }
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}