import { Button } from "@material-tailwind/react";

export const ButtonIconDefault = ({ text, variant, icon, type, className }) => {
    return (
        <div className="flex items-center">
            <Button
                type={type}
                variant={variant}
                className={`flex items-center gap-2 normal-case border-nav bg-dark font-poppins ${className}`}>
                {icon}

                {text}
            </Button>
        </div>
    );
}