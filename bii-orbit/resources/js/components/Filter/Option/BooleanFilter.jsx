import React from "react";

export const BooleanFilter = ({ type = 'checkbox', id, header, headerClassName = '', labelClassName = '', isBool = false, checked, handleSingleCheckboxChange }) => {
    const checkboxInput = (
        <input
            id={id}
            type={type}
            name={header}
            checked={checked}
            className="input__checkbox__radio"
            onChange={handleSingleCheckboxChange}
        />
    );

    const labelContent = (
        <div className="ml-3 leading-6 flex-1 flex items-center">
            <span className={`md:text-[12px] lg:text-[12px] xl:text-[14px] font-normal text-primary-hover ${isBool ? "" : headerClassName}`}>
                {header}
            </span>
        </div>
    );

    return (
        <div>
            <label className={`flex items-center hover:cursor-pointer w-full pb-1 ${isBool ? "" : labelClassName}`}>
                <div className="flex h-6 items-center checkbox">
                    {checkboxInput}
                </div>
                {labelContent}
            </label>
        </div>
    );
};
