import { Textarea } from "@material-tailwind/react";

export const TextareaDefault = ({label, required, type, name, disabled}) => {
    return (
        <div className="col-span-2 sm:pb-0 pb-6 w-full">
            <Textarea
                className="bg-white"
                disabled={disabled}
                name={name}
                type={type}
                label={label}
                required={required}
            />
        </div>
    );
}
