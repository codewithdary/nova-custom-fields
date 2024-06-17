import React from "react";
import MenuItem from "@mui/material/MenuItem";
import {ButtonDefault} from "../Form/ButtonDefault.jsx";
import {TrashIcon} from "@heroicons/react/24/outline/index.js";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Typography} from "@material-tailwind/react";
import {router} from "@inertiajs/react";
import {toast} from "react-toastify";

export function DeleteModal({ id, buttonText, headerText, bodyText, url }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    function handleSubmit(e) {
        e.preventDefault()

        router.delete(url + id, {
            preserveScroll: true,
            onSuccess: toast("The selected item has been successfully deleted")
        });
    }

    const handleOpen = (event) => {
        event.stopPropagation();
        setOpen(true);
    };

    return (
        <>
            <MenuItem className="flex items-center gap-2 text-warning transition-all hover:cursor-pointer" onClick={handleOpen}>
                <TrashIcon
                    className="w-5 text-warning"
                />

                <Typography variant="small" className="font-medium text-warning">
                    {buttonText}
                </Typography>
            </MenuItem>

            <Dialog open={open} handler={handleClose}>
                <DialogHeader className="font-display text-xl text-primary-header font-extrabold pb-2">
                    {headerText}
                </DialogHeader>

                <DialogBody className="text-paragraph">
                    {bodyText}
                </DialogBody>

                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={handleClose}
                        className="mr-1 text-warning">
                        Cancel
                    </Button>

                    <form onSubmit={handleSubmit}>
                        <ButtonDefault
                            type="submit"
                            text="Confirm"
                            variant="filled"
                            className="bg-dark"
                            onClick={handleClose}
                        />
                    </form>
                </DialogFooter>
            </Dialog>
        </>
    );
}
