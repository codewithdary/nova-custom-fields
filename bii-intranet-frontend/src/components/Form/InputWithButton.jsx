import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import {CheckIcon} from "@heroicons/react/16/solid";

export const InputWithButton = ({type, label, btnText}) => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    const notify = () => toast("You have copied the URL");

    return (
        <div className="relative flex w-full">
            <Input
                disabled
                type={type}
                label={label}
                value={email}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />

            <Button
                onClick={notify}
                size="sm"
                className="!absolute right-1 top-1 rounded bg-dark">
                {btnText}
            </Button>
        </div>
    );
}