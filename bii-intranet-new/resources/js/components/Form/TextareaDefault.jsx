import { Textarea } from "@material-tailwind/react";

export const TextareaDefault = ({id, label, value, onChange, required, type, name, disabled, error}) => {
    return (
        <div className="col-span-2 sm:pb-0 pb-6 w-full">
            <Textarea
                id={id}
                name={name}
                type={type}
                label={label}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className="bg-white focus:ring-0"
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}
