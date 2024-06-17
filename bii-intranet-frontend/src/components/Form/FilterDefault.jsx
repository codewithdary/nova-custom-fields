import {Popover, PopoverHandler, PopoverContent,} from "@material-tailwind/react";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {SelectDefault} from "./SelectDefault";
import React from "react";
import skills from "../../data/skills.json";
import {ButtonDefault} from "./ButtonDefault";
import SectionHeader from "../Helper/SectionHeader";
import DatePicker from "./DatePicker";
import {FunnelIcon} from "@heroicons/react/24/outline";

function UserFilters() {
    return (
        <>
            <form action="">
                <div className="flex gap-2">
                    <SelectDefault
                        name="type"
                        type="text"
                        label="Company"
                        rows={skills}
                        required={true}
                    />
                </div>

                <div className="flex gap-2 pt-6">
                    <SelectDefault
                        name="type"
                        type="text"
                        label="Skills"
                        rows={skills}
                        required={true}
                    />
                </div>

                <div className="flex gap-2 pt-6 w-full">
                    <ButtonDefault
                        variant="filled"
                        text="Apply filters"
                    />
                </div>
            </form>
        </>
    );
}

function NewsFilters({ page }) {
    return (
        <>
            <form action="">
                <div className="flex gap-2">
                    <SelectDefault
                        name="type"
                        type="text"
                        label="Content tag"
                        rows={skills}
                        required={true}
                    />
                </div>

                <div className="flex gap-2 pt-6 w-full">
                    <ButtonDefault
                        variant="filled"
                        text="Apply filter"
                    />
                </div>
            </form>
        </>
    );
}

function EventsFilter({ page }) {
    return (
        <>
            <form action="">
                <div>
                    <DatePicker
                        label="Select date range"
                    />
                </div>

                <div className="flex gap-2 pt-6">
                    <SelectDefault
                        name="type"
                        type="text"
                        label="Content tag"
                        rows={skills}
                        required={true}
                    />
                </div>

                <div className="flex gap-2 pt-6">
                    <SelectDefault
                        name="type"
                        type="text"
                        label="Audience tag"
                        rows={skills}
                        required={true}
                    />
                </div>

                <div className="flex gap-2 pt-6 w-full">
                    <ButtonDefault
                        variant="filled"
                        text="Apply filter"
                    />
                </div>
            </form>
        </>
    );
}

export const FilterDefault = ({type, subheader, isIcon = false}) => {
    return (
        <Popover placement="bottom">
            <PopoverHandler>
                {isIcon ? (
                    <FunnelIcon
                        className="w-5 text-nav hover:text-nav-hover transition-all"
                    />
                ) : (
                    <div className="flex text-sm hover:cursor-pointer text-paragraph">
                        Filter
                        <ChevronDownIcon
                            className="w-5 h-5"
                        />
                    </div>
                )}
            </PopoverHandler>

            <PopoverContent className="w-96 z-50">
                <SectionHeader
                    text="Filter options"
                    subheader={subheader}
                    showSubParagraph={true}
                />

                {type === 'user' && (
                   <UserFilters />
                )}

                {type === 'news' && (
                    <NewsFilters />
                )}

                {type === 'events' && (
                    <EventsFilter />
                )}
            </PopoverContent>
        </Popover>
    );
}