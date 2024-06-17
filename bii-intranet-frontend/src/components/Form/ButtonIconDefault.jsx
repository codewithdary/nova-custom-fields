import { Button } from "@material-tailwind/react";

export const ButtonIconDefault = ({text, variant, icon}) => {
    return (
        <div className="flex items-center">
            <Button variant={variant} className="flex items-center gap-2 normal-case border-nav font-poppins">
                {icon}
                {text}
            </Button>
        </div>
    );
}