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
import useEventStatusForm from "../Request/Event/EventStatusSubmit.jsx";
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

export function EventViewDrawer({ event, openRight, closeDrawerRight }) {
    const [open, setOpen] = React.useState(0);
    const { value, handleSubmit } = useEventSignUpForm(event.id, event.is_logged_participant);
    const { eventStatusValue, handleStatusSubmit } = useEventStatusForm(event.id, event.status);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <React.Fragment>
            <Drawer
                key={event.id}
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4 -right-14 shadow-xl overflow-y-auto w-full">
                <div className="mx-auto mr-10 sm:mr-10 sm:w-[98%] h-dvh">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="min-w-0 flex-1">
                                <div className="flex pb-6">
                                    <div className="pr-4">
                                        <form onSubmit={handleSubmit}>
                                            <ButtonIconDefault
                                                icon={<HandRaisedIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>}
                                                variant="filled"
                                                type="submit"
                                                text={event.is_logged_participant ? 'Sign off' : 'Sign up' }
                                            />
                                        </form>
                                    </div>

                                    <div>
                                        <a href={"/events/export/" + event.id}>
                                            <ButtonIconDefault
                                                icon={<DownloadIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>}
                                                variant="filled"
                                                text="Save"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {event.is_published ? (
                                    <div className="mt-1 flex items-center gap-x-1.5 pb-2">
                                        <div className="flex-none rounded-full bg-green-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <p className="font-poppins text-sm text-nav">
                                            Published
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-red-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        </div>
                                        <p className="font-poppins text-sm text-nav">
                                            Draft
                                        </p>
                                    </div>
                                )}

                                {event.event_title &&
                                    <h2 className="text-2xl font-bold leading-7 text-primary-header sm:text-3xl sm:tracking-tight pb-2 w-4/5">
                                        {event.event_title}
                                    </h2>
                                }

                                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                                    {event.human_date_start &&
                                        <EventDetail
                                            icon={<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={event.is_all_day ? "This event is all day on " + event.human_date_start_full : event.human_date_start}
                                        />
                                    }

                                    {event.location &&
                                        <EventDetail
                                            icon={<MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={event.location}
                                        />
                                    }

                                    {event.join_url &&
                                        <EventDetail
                                            icon={<LinkIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={<a href={event.join_url} target="_blank" className="hover:text-nav-hover transition-all truncate underline">Click here for the online url</a>}
                                        />
                                    }

                                    {event.host_name &&
                                        <EventDetail
                                            icon={<UserIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={<><span>The host of this event is &nbsp;</span><a href={`mailto:${event.host_email}`} className="hover:text-nav-hover transition-all underline">{event.host_name}</a></>}
                                        />
                                    }

                                    {event.status !== null && event.status !== undefined &&
                                        <EventDetail
                                            icon={event.status === 1 ? <CheckIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/> : <XMarkIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={<span>This event is <span className="font-bold">{event.status ? 'active' : 'cancelled'}</span></span>}
                                        />
                                    }

                                    {event.status !== null && event.status !== undefined &&
                                        <EventDetail
                                            icon={<UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-nav" aria-hidden="true"/>}
                                            content={event.participants_count + " participant(s)"}
                                        />
                                    }

                                    {event.about &&
                                        <EventDescription
                                            title="Event information"
                                            field={event.about}
                                        />
                                    }

                                    {event.agenda_desc &&
                                        <EventDescription
                                            title="Agenda description"
                                            field={event.agenda_desc}
                                        />
                                    }

                                    {event.host_about &&
                                        <EventDescription
                                            title="Host information"
                                            field={event.host_about}
                                        />
                                    }

                                    {event.additional_info &&
                                        <EventDescription
                                            title="Additional information"
                                            field={event.additional_info}
                                        />
                                    }
                                </div>

                                {event.documents.length > 0 && (
                                    <div className="pt-4">
                                        <Accordion
                                            open={open === 1}
                                            icon={<Icon id={1} open={open} />}
                                            className="w-11/12">
                                            <AccordionHeader onClick={() => handleOpen(1)} className="font-poppins text-sm text-primary-header font-semibold pb-2">
                                                Event documents
                                            </AccordionHeader>

                                            <AccordionBody key={event.id}>
                                                {event.documents.map((document) => (
                                                    <DownloadDefault
                                                        item={document}
                                                    />
                                                ))}
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                )}

                                <div className="w-full pt-6">
                                    <h2 className="text-sm text-primary-header font-semibold pb-2">
                                        Tags
                                    </h2>
                                </div>

                                <div className="flex items-center text-sm w-full pb-1 sm:truncate">
                                    {event.content_tags.length > 0 && (
                                        <div className="text-primary-header">
                                            <CommaSeparatedString
                                                label="Content tags: "
                                                options={event.content_tags}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="mt-2 flex items-center text-sm w-full sm:truncate">
                                    {event.company_tags.length > 0 && (
                                        <div className="text-primary-header">
                                            <CommaSeparatedString
                                                label="Audience tags: "
                                                options={event.company_tags}
                                            />
                                        </div>
                                    )}
                                </div>


                                <div className="pr-4 pt-10 pb-1 pb-20">
                                    <form onSubmit={handleStatusSubmit}>
                                        <ButtonIconDefault
                                            icon={<HandRaisedIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>}
                                            variant="filled"
                                            type="submit"
                                            className={event.status ? 'bg-red-500' : '' }
                                            text={event.status ? 'Cancel' : 'Activate' }
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}