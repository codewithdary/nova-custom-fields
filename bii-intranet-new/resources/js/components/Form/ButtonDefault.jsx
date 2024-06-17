import { Button } from "@material-tailwind/react";

export const ButtonDefault = ({ text, variant, type = "button" }) => {
    return (
        <div className="flex w-max gap-4 normal-case">
            <Button
                type={type}
                className="normal-case font-poppins bg-dark"
                variant={variant}>
                {text}
            </Button>
        </div>
    );
}