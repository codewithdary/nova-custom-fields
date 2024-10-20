import { Button } from "@material-tailwind/react";

export const ButtonIconDefault = ({text, variant, icon, type, className = '', buttonClassName = '', onClick = null, isDisabled = false }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <Button
                fullWidth
                type={type}
                onClick={onClick}
                variant={variant}
                disabled={isDisabled}
                className={`flex items-center justify-center gap-2 normal-case border-primary bg-primary font-extrabold ${buttonClassName}`}
            >
                {icon}

                {text}
            </Button>
        </div>
    );
};
