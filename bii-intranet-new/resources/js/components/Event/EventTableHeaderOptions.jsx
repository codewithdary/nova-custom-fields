import React from "react";
import {DownloadIcon} from "lucide-react";
import {CardHeader, ThemeProvider} from "@material-tailwind/react";
import {InputDefault} from "../Form/InputDefault.jsx";
import {FilterDefault} from "../Form/FilterDefault.jsx";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import useSearchEventForm from "../Request/Event/SearchEventSubmit.jsx";
import {EventDownloadDrawer} from "./EventDownloadDrawer.jsx";
import drawerOptions from "../../data/drawerOptions.jsx";

export function EventTableHeaderOptions({ companyTags, contentTags }) {
    const { value, handleChange, handleSubmit } = useSearchEventForm();
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <ThemeProvider value={drawerOptions}>
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none bg-lightest">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row float-right">
                    <div className="w-full md:w-72 mt-1">
                        <form onSubmit={handleSubmit}>
                            <InputDefault
                                id="term"
                                type="text"
                                name="term"
                                required={false}
                                value={value.term}
                                onChange={handleChange}
                                className="bg-white"
                                label="GlobalSearch"
                                onBlur={handleSubmit}
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </form>
                    </div>


                    <div className="hover:cursor-pointer">
                        <FilterDefault
                            isIcon={true}
                            type="events"
                            subheader="Narrow down your search and find specific items. Leave a filter blank if you don't need it."
                            options={companyTags}
                            contentTags={contentTags}
                        />
                    </div>

                    <div className="hover:cursor-pointer">
                        <DownloadIcon
                            onClick={openDrawerRight}
                            className="w-5 text-nav hover:text-nav-hover transition-all hover:cursor-pointer"
                        />
                    </div>
                </div>

                <EventDownloadDrawer
                    openRight={openRight}
                    contentTags={contentTags}
                    companyTags={companyTags}
                    closeDrawerRight={closeDrawerRight}
                />
            </CardHeader>
        </ThemeProvider>
    );
}