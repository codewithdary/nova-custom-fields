import React from "react";
import DatePicker from "../Form/DatePicker.jsx";
import {Button, Drawer} from "@material-tailwind/react";
import SectionHeader from "../Helper/SectionHeader.jsx";
import {SelectDefault} from "../Form/SelectDefault.jsx";
import {MultiSelectDefault} from "../Form/MultiSelectDefault.jsx";
import useEventMultipleEventForm from "../Request/Event/ExportEventSubmit.jsx";
import {usePage} from "@inertiajs/react";

export function EventDownloadDrawer({ companyTags, contentTags, openRight, closeDrawerRight }) {
    const { errors } = usePage().props
    const { values,
        handleStartDateChange,
        handleEndDateChange,
        handleSelectChange,
        handleContentTagsChange,
        handleAudienceTagsChange,
        handleSubmit } = useEventMultipleEventForm();

    return (
        <React.Fragment>
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4 -right-14 shadow-xl overflow-y-auto w-full">
                <div className="mx-auto mr-10 sm:mr-10 sm:w-[98%] h-dvh">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="lg:flex lg:items-center lg:justify-between pt-10 mr-10">
                            <div className="min-w-0 flex-1">
                                <div className="pb-6">
                                    <h2 className="text-2xl font-bold leading-7 text-primary-header sm:text-3xl sm:tracking-tight pb-2 w-4/5">
                                        Download events
                                    </h2>
                                    <p className="text-paragraph pt-2">
                                        Customizing and narrowing down your event search
                                    </p>
                                    <div className="pr-4 pt-6">
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <SectionHeader
                                                    text="General information"
                                                    subheader="To narrow down the downloadable events and ensure you get the right format, it's necessary to enter the starting date, ending date, and operating system you use."
                                                    showSubParagraph={true}
                                                />
                                            </div>

                                            <div>
                                                <DatePicker
                                                    type="text"
                                                    required={true}
                                                    id="starting_date"
                                                    isDisabled={false}
                                                    name="starting_date"
                                                    label="starting date"
                                                    onChange={handleStartDateChange}
                                                    value={values.date_start}
                                                    error={errors.date_start}
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <DatePicker
                                                    type="text"
                                                    required={true}
                                                    id="ending_date"
                                                    name="ending_date"
                                                    isDisabled={false}
                                                    label="Ending date"
                                                    onChange={handleEndDateChange}
                                                    value={values.date_end}
                                                    error={errors.date_end}
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <SelectDefault
                                                    name="type"
                                                    type="text"
                                                    label="Calendar type"
                                                    rows={["iCalendar", "Outlook", "Google Calendar"]}
                                                    required={true}
                                                    value={values.calendar_type}
                                                    error={errors.calendar_type}
                                                    handleSelectChange={handleSelectChange}
                                                />
                                            </div>

                                           <div className="pt-6">
                                               <SectionHeader
                                                   text="Optional information"
                                                   subheader="To only export the events that suit your specific needs, you have the option to choose one or more of the following fields. This will help to narrow down the search even further."
                                                   showSubParagraph={true}
                                               />
                                           </div>

                                            <div>
                                                <MultiSelectDefault
                                                    id="audience_tags"
                                                    name="content_tags"
                                                    type="text"
                                                    label="Content tags"
                                                    required={false}
                                                    rows={contentTags}
                                                    value={values.content_tags}
                                                    error={errors.content_tags}
                                                    handleMultiSelectChange={handleContentTagsChange}
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <MultiSelectDefault
                                                    id="audience_tags"
                                                    name="audience_tags"
                                                    type="text"
                                                    label="Audience tags"
                                                    required={false}
                                                    rows={companyTags}
                                                    value={values.audience_tags}
                                                    error={errors.audience_tags}
                                                    handleMultiSelectChange={handleAudienceTagsChange}
                                                />
                                            </div>

                                            <div className="pt-6">
                                                <Button type="submit" fullWidth className="bg-dark">
                                                    Download events
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}