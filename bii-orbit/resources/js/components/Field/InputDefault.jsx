import React from "react";
import { Input } from "@material-tailwind/react";
import renderAttribute from "../../helper/Content/MakeRequired.jsx";
import { CurrencyEuroIcon } from "@heroicons/react/24/outline/index.js";

export const InputDefault = React.memo((props) => {
    const {
        id,
        label,
        required,
        type,
        name,
        isDisabled = false,
        value,
        onChange,
        error,
        defaultValue,
        icon = null,
        onBlur = null,
        placeholder = null,
        isVariant = true,
        className = "",
        isCurrency = false,
        maxLength = null,
    } = props;

    const attribute = renderAttribute(required);

    const renderInput = () => (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            maxLength={maxLength}
            disabled={isDisabled}
            placeholder={placeholder}
            className={`${isCurrency ? "pl-8" : ""} input_default ${className}`}
        />
    );

    return isVariant ? (
        <div className="border-paragraph/40">
            {label && (
                <div className="pb-1">
                    <label
                        htmlFor={name}
                        className="block text-[13px] leading-6 tracking-wide text-paragraph"
                    >
                        {label} {attribute}
                    </label>
                </div>
            )}

            <div className="relative border-light">
                {isCurrency && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
                        <CurrencyEuroIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-light"
                        />
                    </div>
                )}

                {renderInput()}
            </div>

            {error && <div className="warning">
                {error}
            </div>}
        </div>
    ) : (
        <div className="pb-6 sm:pb-0 border-paragraph/40">
            <Input
                id={id}
                name={name}
                type={type}
                icon={icon}
                value={value}
                label={label}
                onBlur={onBlur}
                onChange={onChange}
                required={required}
                disabled={isDisabled}
                default={defaultValue}
                className="bg-white border-paragraph focus:ring-0"
            />

            {error && <div className="warning">
                {error}
            </div>}
        </div>
    );
});
