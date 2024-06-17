import { Input } from "@material-tailwind/react";
import React from "react";

export const InputDefault = ({id, label, description = null, required, type, name, isDisabled = false, value, onChange, error, defaultValue, icon = null, onBlur = null, placeholder = null}) => {
    return (
        <div className="pb-6 sm:pb-0 font-poppins border-nav">
            <div className="pb-1">
                <label htmlFor={name} className="block text-xs leading-6 text-gray-900">
                    {label}
                </label>

                {description && (
                    <p>
                        Write a short description about yourself
                    </p>
                )}
            </div>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                disabled={isDisabled}
                className="block w-full rounded-md border-0 py-2 focus:ring-nav-hover text-bg-dark shadow-sm ring-1 ring-inset ring-nav placeholder:text-nav-hover focus:ring-inset focus:ring-bg-nav sm:text-sm sm:leading-6 placeholder:text-[14px]"
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}