import React from "react";
import {DownloadIcon} from "lucide-react";
import {EventDetail} from "./EventDetail.jsx";
import {Drawer} from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/16/solid";
import {EventDescription} from "./EventDescription.jsx";
import {DownloadDefault} from "../Form/DownloadDefault.jsx";
import {ButtonIconDefault} from "../Form/ButtonIconDefault.jsx";
import useEventSignUpForm from "../Request/Event/SignUpFormSubmit.jsx";
import {CommaSeparatedString} from "../Helper/CommaSeparatedString.jsx";
import {Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";
import {CalendarIcon, HandRaisedIcon, LinkIcon, MapPinIcon, UserIcon, UsersIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export function EventCreateDrawer({ selectedDate, openRight, closeDrawerRight }) {
    const [open, setOpen] = React.useState(0);
    // const { value, handleSubmit } = useEventSignUpForm(event.id, event.is_logged_participant);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <React.Fragment>
            <Drawer
                key={selectedDate}
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4 -right-14 shadow-xl overflow-y-auto w-full">
                <div className="mx-auto mr-10 sm:mr-10 sm:w-[98%] h-dvh">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="lg:flex lg:items-center lg:justify-between pt-10 mr-10">
                            <div className="min-w-0 flex-1">
                                <div className="flex pb-6 w-full">
                                    <div className="pr-4">
                                        <h2 className="text-2xl font-bold leading-7 text-primary-header sm:text-3xl sm:tracking-tight pb-2 w-full">
                                            Create event
                                        </h2>
                                        <p className="text-paragraph pt-2">
                                            Here, you have the option to quickly create events. If you wish to add more details, please open and edit the event.
                                        </p>
                                        <form>

                                        </form>
                                    </div>

                                    {/*<div>*/}
                                    {/*    <a href={"/events/export/" + event.id}>*/}
                                    {/*        <ButtonIconDefault*/}
                                    {/*            icon={<DownloadIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>}*/}
                                    {/*            variant="filled"*/}
                                    {/*            text="Save"*/}
                                    {/*        />*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}