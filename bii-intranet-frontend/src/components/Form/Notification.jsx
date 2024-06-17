import React from "react";
import {Popover, PopoverHandler, PopoverContent,} from "@material-tailwind/react";
import {BellAlertIcon} from "@heroicons/react/24/outline";
import {CheckIcon} from "@heroicons/react/16/solid";
import SectionHeader from "../Helper/SectionHeader";
import timeline from "../../data/timeline"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Notification = () => {
    return (
        <Popover
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
            <PopoverHandler>
                <BellAlertIcon
                    className="w-6 text-nav transition-all hover:cursor-pointer hover:text-nav-hover"
                />
            </PopoverHandler>

            <PopoverContent className="z-50 sm:w-fit w-full">
                <div className="border-b-2 border-gray-200 mb-4">
                    <SectionHeader
                        text="Notifications"
                        subheader="Here's what happened in your company"
                        showSubParagraph={true}
                    />
                </div>

                <div className="flow-root h-60 overflow-y-auto">
                    <ul role="list" className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-8">
                                    {eventIdx !== timeline.length - 1 ? (
                                        <span
                                            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                        <div>
                                          <span
                                              className={classNames(
                                                  event.iconBackground,
                                                  'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                              )}>
                                            <event.icon
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            />
                                          </span>
                                        </div>

                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    {event.content}{' '}
                                                    <a href={event.href} className="font-medium text-gray-900 focus:none">
                                                        {event.target}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4 border-t-2 border-gray-200">
                    <span className="font-bold flex items-center text-nav hover:cursor-pointer hover:text-nav-hover transition-all">
                        <CheckIcon
                            className="w-4"
                        /> Mark all as read
                    </span>
                </div>
            </PopoverContent>
        </Popover>
    );
}