import { Input } from "@material-tailwind/react";

export const InputDefault = ({label, required, type, name, disabled}) => {
    return (
        <div className="pb-6 sm:pb-0 font-poppins">
            <Input
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