import React from "react";
import {DownloadIcon, MailIcon} from "lucide-react";
import {Typography} from "@material-tailwind/react";
import {DeleteModal} from "../Modal/DeleteModal.jsx";
import {EventViewDrawer} from "./EventViewDrawer.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import {PencilSquareIcon} from "@heroicons/react/24/outline";
import useEventSignUpForm from "../Request/Event/SignUpFormSubmit.jsx";
import {EllipsisVerticalIcon} from "@heroicons/react/16/solid/index.js";
import {EyeIcon, HandRaisedIcon} from "@heroicons/react/24/outline/index.js";
import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import drawerOptions from "../../data/drawerOptions.jsx";


export function EventDropdownMenu({ isBiiUser, event }) {
    const { value, handleSubmit } = useEventSignUpForm(event.id, event.is_logged_participant);
    const [openRight, setOpenRight] = React.useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);


    return (
        <ThemeProvider value={drawerOptions} key={event.id}>
            <div>
                <Menu>
                    <MenuHandler>
                        <EllipsisVerticalIcon
                            className="w-6 text-nav hover:text-nav-hover transition-all hover:cursor-pointer pt-3"
                        />
                    </MenuHandler>

                    <MenuList className="p-0 focus:ring-0 focus:border-none">
                        <MenuItem
                            className="flex items-center gap-2 text-nav hover:text-nav-hover transition-all hover:cursor-pointer pl-4"
                            onClick={openDrawerRight}>
                            <EyeIcon
                                className="w-5"
                            />

                            <Typography variant="small" className="font-medium">
                                View
                            </Typography>
                        </MenuItem>

                        {isBiiUser &&(
                            <a href={"/events/" + event.id + "/edit"} className="text-nav hover:text-nav-hover transition-all hover:cursor-pointer hover:ring-0 hover:border-0 active:text-transparent outline-none flex items-center">
                                <MenuItem className="flex items-center gap-2 pl-4">
                                    <PencilSquareIcon
                                        className="w-5"
                                    />
                                    <Typography variant="small" className="font-medium">
                                        Edit
                                    </Typography>
                                </MenuItem>
                            </a>
                        )}

                        <a href={"/events/export/" + event.id} className="text-nav hover:text-nav-hover transition-all hover:cursor-pointer hover:ring-0 hover:border-0 active:text-transparent outline-none flex items-center">
                            <MenuItem className="flex items-center gap-2 text-nav pl-4">
                                <DownloadIcon
                                    className="w-5"
                                />

                                <Typography variant="small" className="font-medium">
                                    Save to calendar
                                </Typography>
                            </MenuItem>
                        </a>

                        <a href={"mailto:" + event.host_email + "?subject=Event: " + event.title}
                           className="text-nav hover:text-nav-hover transition-all hover:cursor-pointer hover:ring-0 hover:border-0 active:text-transparent outline-none flex items-center">
                            <MenuItem className="flex items-center gap-2  pl-4">
                                <MailIcon
                                    className="w-5"
                                />

                                <Typography variant="small" className="font-medium">
                                    Mail host
                                </Typography>
                            </MenuItem>
                        </a>

                        <form onSubmit={handleSubmit} className="text-nav hover:text-nav-hover transition-all hover:cursor-pointer hover:ring-0 hover:border-0 active:text-transparent outline-none flex items-center">
                            <MenuItem className="flex items-center gap-2 pl-4">
                                <HandRaisedIcon
                                    className="w-5"
                                />

                                <Typography variant="small" className="font-medium">
                                    {event.is_logged_participant ? 'Sign off' : 'Sign up' }
                                </Typography>
                            </MenuItem>
                        </form>

                        {isBiiUser &&(
                            <DeleteModal
                                id={event.id}
                                url="/events/"
                                bodyText={"You are about to delete " + event.title + " .Are you sure that you want to do this? Please note that you cannot undo this action, as the event will be permanently deleted."}
                                buttonText="Delete"
                                headerText="Are you certain you want to delete this event?"
                            />
                        )}
                    </MenuList>
                </Menu>
            </div>

            <EventViewDrawer
                event={event}
                openRight={openRight}
                closeDrawerRight={closeDrawerRight}
            />
        </ThemeProvider>
    );
}
