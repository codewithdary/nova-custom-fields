import { Button } from "@material-tailwind/react";

export const ButtonDefault = ({text, variant}) => {
    return (
        <div className="flex w-max gap-4 normal-case">
            <Button
                className="normal-case font-poppins bg-dark"
                variant={variant}>
                {text}
            </Button>
        </div>
    );
}