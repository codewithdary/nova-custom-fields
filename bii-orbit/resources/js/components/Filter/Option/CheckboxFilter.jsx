import React from "react";

export const CheckboxFilter = ({ id, parentChecked, handleCheckboxClick, handleParentCheckboxChange, header, headerClassName, labelClassName, isChild = true, isBool = false, checked }) => {
    const checkboxInput = (
        <input
            id={id}
            name="filters"
            type="checkbox"
            onClick={handleCheckboxClick}
            checked={isBool ? checked : parentChecked}
            className="accent-primary hover:accent-primary-hover outline-0 transition-all h-4 w-4 scale-105 hover:cursor-pointer focus:outline-none focus:ring-0"
            onChange={
                !isBool &&
                (e =>
                    isChild
                        ? handleParentCheckboxChange(e.target.checked)
                        : handleParentCheckboxChange(id, e.target.checked))
            }
        />
    );

    const labelContent = (
        <div className={`ml-3 leading-6 flex-1 flex items-center`}>
            <span className={`md:text-[12px] lg:text-[12px] xl:text-[14px] font-normal text-primary-hover ${isBool ? "" : headerClassName}`}>
                {header}
            </span>
        </div>
    );

    return (
        <div className={isBool ? "pt-4" : ""}>
            <label className={`flex items-center hover:cursor-pointer w-full pb-1 ${isBool ? "" : labelClassName}`}>
                <div className="flex h-6 items-center checkbox">
                    {checkboxInput}
                </div>
                {labelContent}
            </label>
        </div>
    );
};
