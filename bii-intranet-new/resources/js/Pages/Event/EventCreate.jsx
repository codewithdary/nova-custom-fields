import React from "react";
import slots from "../../data/slots.json"
import {Head, usePage} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {Button} from "@material-tailwind/react";
import {Filepond} from "../../components/Form/Filepond.jsx";
import DatePicker from "../../components/Form/DatePicker.jsx";
import PageHeader from "../../components/Helper/PageHeader.jsx";
import {RadioButton} from "../../components/Form/RadioButton.jsx";
import {InputDefault} from "../../components/Form/InputDefault.jsx";
import SectionHeader from "../../components/Helper/SectionHeader.jsx";
import {SelectDefault} from "../../components/Form/SelectDefault.jsx";
import {CheckboxDefault} from "../../components/Form/CheckboxDefault.jsx";
import useEventForm from "../../components/Request/Event/EventFormSubmit.jsx";
import {TextEditorDefault} from "../../components/Form/TextEditorDefault.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {MultiSelectDefault} from "../../components/Form/MultiSelectDefault.jsx";

const EventCreate = ({ ...props }) => {
    const { errors } = usePage().props
    const {
        values,
        handleChange,
        handleLocationChange,
        handleTypeSelectChange,
        handleStartTimeSelectChange,
        handleFrequencySelectChange,
        handleEndTimeSelectChange,
        handleContentTagsChange,
        handleAudienceTagsChange,
        handleSubmit,
        handleStartDateChange,
        handleEndDateChange,
        handleCheckboxChange,
        handleImageChange,
        handleJoinUrlChange,
        handleHostNameChange,
        handleHostEmailChange,
        handleAgendaDescEditorChangeLocal,
        handleAgendaDescContentChange,
        handleAboutEditorChangeLocal,
        handleAboutContentChange,
        handleRadioChange,
        handleNotifyCheckboxChange
    } = useEventForm(props);

    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <div>
                <div>
                    <PageHeader
                        header="New event"
                        subheader="Events"
                    />
                </div>

                <FadeIn key="/">
                    <form onSubmit={handleSubmit}>
                        <div className="md:grid block md:grid-cols-3 gap-x-10 pt-4 sm:pt-10 pb-4">
                            <div className="col-span-2">
                                <SectionHeader
                                    text="General"
                                    subheader="Add a captivating title, choose the event type, and set the start and end dates for your event."
                                    showSubParagraph={true}
                                />

                                <div className="block md:grid md:grid-cols-2 w-full">
                                    <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                        <InputDefault
                                            name="title"
                                            type="text"
                                            label="Title"
                                            id="title"
                                            required={true}
                                            value={values.title}
                                            error={errors.title}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <SelectDefault
                                            name="type"
                                            type="text"
                                            label="Type"
                                            id="type"
                                            rows={props.types}
                                            required={true}
                                            value={values.type}
                                            error={errors.type}
                                            handleSelectChange={handleTypeSelectChange}
                                        />
                                    </div>

                                    <div className={`md:pb-8 pb-6 pr-0 ${values.is_all_day ? 'col-span-2' : 'md:pr-4'}`}>
                                        <DatePicker
                                            label={values.is_all_day ? 'Add the date it should be visible on' : 'Starting date'}
                                            required={true}
                                            type="text"
                                            id="date_start"
                                            isDisabled={false}
                                            name="date_start"
                                            onChange={handleStartDateChange}
                                            value={values.date_start}
                                            error={errors.date_start}
                                        />
                                    </div>

                                    {! values.is_all_day && (
                                        <div>
                                            <SelectDefault
                                                name="type"
                                                type="text"
                                                label="Starting time"
                                                rows={slots}
                                                required={true}
                                                value={values.time_start}
                                                error={errors.time_start}
                                                handleSelectChange={handleStartTimeSelectChange}
                                            />
                                        </div>
                                    )}

                                    {! values.is_all_day && (
                                        <div className="md:pb-8 pb-6 pr-0 md:pr-4">
                                            <DatePicker
                                                label="Ending date"
                                                required={true}
                                                type="text"
                                                id="date_end"
                                                isDisabled={false}
                                                name="date_end"
                                                onChange={handleEndDateChange}
                                                value={values.date_end}
                                                error={errors.date_end}
                                            />
                                        </div>
                                    )}

                                    {! values.is_all_day && (
                                        <div>
                                            <SelectDefault
                                                name="type"
                                                type="text"
                                                label="Ending time"
                                                rows={slots}
                                                id="time_end"
                                                required={true}
                                                handleSelectChange={handleEndTimeSelectChange}
                                                value={values.time_end}
                                                error={errors.time_end}
                                            />
                                        </div>
                                    )}

                                    <div className="col-span-2">
                                        <SectionHeader
                                            text="Additional information"
                                            subheader="Provide details about the host, the location, and the frequency of the event to repeat it."
                                            showSubParagraph={true}
                                        />
                                    </div>

                                    <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                        <InputDefault
                                            id="host_name"
                                            name="host_name"
                                            type="text"
                                            label="Host name"
                                            required={true}
                                            value={values.host_name}
                                            error={errors.host_name}
                                            onChange={handleHostNameChange}
                                        />
                                    </div>

                                    <div>
                                        <InputDefault
                                            id="host_email"
                                            name="host_email"
                                            type="email"
                                            label="Host email"
                                            required={true}
                                            value={values.host_email}
                                            error={errors.host_email}
                                            onChange={handleHostEmailChange}
                                        />
                                    </div>

                                    <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                        <SelectDefault
                                            name="frequency"
                                            type="text"
                                            label="Frequency"
                                            rows={props.frequency}
                                            required={true}
                                            id="frequency"
                                            current="Single"
                                            value={values.frequency}
                                            error={errors.frequency}
                                            handleSelectChange={handleFrequencySelectChange}
                                        />
                                    </div>

                                    <div className="md:pb-8 pr-0">
                                        <InputDefault
                                            name="location"
                                            type="text"
                                            label="Location"
                                            required={true}
                                            id="location"
                                            value={values.location}
                                            error={errors.location}
                                            onChange={handleLocationChange}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <SectionHeader
                                            text="Tags"
                                            subheader="Enhance the findability of your event by adding relevant tags."
                                            showSubParagraph={true}
                                        />
                                    </div>

                                    <div className="md:pb-8 pb-6 pr-0 md:pr-4">
                                        <MultiSelectDefault
                                            id="audience_tgs"
                                            name="audience_tgs"
                                            type="text"
                                            label="Audience tags"
                                            required={true}
                                            rows={props.companyTags}
                                            value={values.company_tags}
                                            error={errors.company_tags}
                                            handleMultiSelectChange={handleAudienceTagsChange}
                                        />
                                    </div>

                                    <div className="md:pb-8 pb-0 pr-0">
                                        <MultiSelectDefault
                                            id="content_tags"
                                            name="content_tags"
                                            type="text"
                                            label="Content tags"
                                            required={true}
                                            rows={props.contentTags}
                                            value={values.content_tags}
                                            error={errors.content_tags}
                                            handleMultiSelectChange={handleContentTagsChange}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <SectionHeader
                                            text="How to join"
                                            subheader="Add an optional meeting URL so participants know how to join the event."
                                            showSubParagraph={true}
                                        />
                                    </div>

                                    <div className="col-span-2 md:pb-8 pb-0 pr-0">
                                        <InputDefault
                                            id="join_url"
                                            name="join_url"
                                            type="text"
                                            label="Meeting URL"
                                            required={false}
                                            value={values.join_url}
                                            error={errors.join_url}
                                            onChange={handleJoinUrlChange}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <SectionHeader
                                            text="Event description"
                                            subheader="Provide a concise and clear description of your event. This will be displayed when a user exports or syncs the event."
                                            showSubParagraph={true}
                                        />
                                    </div>

                                    <div className="pb-8 col-span-2">
                                        <TextEditorDefault
                                            id="about"
                                            name="about"
                                            height="390px"
                                            value={values.about}
                                            error={errors.about}
                                            onEditorChange={handleAboutEditorChangeLocal}
                                            onContentChange={handleAboutContentChange}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <SectionHeader
                                            text="Event agenda"
                                            subheader="Let attendees know what to expect, gives structure to the event, and helps keep things on track."
                                            showSubParagraph={true}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <TextEditorDefault
                                            id="agenda_desc"
                                            name="agenda_desc"
                                            height="390px"
                                            value={values.agenda_desc}
                                            error={errors.agenda_desc}
                                            onEditorChange={handleAgendaDescEditorChangeLocal}
                                            onContentChange={handleAgendaDescContentChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 z-1 pt-6 md:pt-0">
                                <div className="flex flex-col">
                                    <SectionHeader
                                        text="Control your time"
                                        subheader="How should the event be displayed in the calendar?"
                                        showSubParagraph={true}
                                    />

                                    <CheckboxDefault
                                        header="All day"
                                        description="Check if this event should be shown as all-day"
                                        onChange={handleCheckboxChange}
                                        value={values.is_all_day}
                                        error={errors.is_all_day}
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </div>

                                <div className="flex flex-col pt-6">
                                    <SectionHeader
                                        text="Event status"
                                        subheader="How should the public see it?"
                                        showSubParagraph={true}
                                    />

                                    <RadioButton
                                        value={1}
                                        label="Live"
                                        id="is_published"
                                        name="is_published"
                                        hasDescription={true}
                                        handleRadioChange={handleRadioChange}
                                        description="Event will be accessible to the audience instantly."
                                    />

                                    <RadioButton
                                        value={0}
                                        label="Draft"
                                        id="is_published"
                                        name="is_published"
                                        hasDescription={true}
                                        error={errors.is_published}
                                        handleRadioChange={handleRadioChange}
                                        description="Event is not ready for publication or broadcasting."
                                    />
                                </div>

                                <div className="pt-6">
                                    <SectionHeader
                                        text="Notifications"
                                        subheader="Notify users per mail about changes"
                                        showSubParagraph={true}
                                    />

                                    <CheckboxDefault
                                        header="Is informative"
                                        description="Notify participants about changes"
                                        onChange={handleCheckboxChange}
                                        value={values.is_informative}
                                        error={errors.is_informative}
                                        handleCheckboxChange={handleNotifyCheckboxChange}
                                    />
                                </div>

                                <div className="pt-6">
                                    <SectionHeader
                                        text="Banner"
                                        subheader="Add an optional banner to your event."
                                        showSubParagraph={true}
                                    />
                                    <Filepond
                                        id="image"
                                        name="image"
                                        maxFiles={2}
                                        value={values.image}
                                        allowMultiple={true}
                                        error={errors.image}
                                        acceptedFileTypes={['image/png', 'image/jpeg']}
                                        handleImageChange={handleImageChange}
                                        label='Drag & Drop your file or <span class="filepond--label-action">Browse</span> for your banner'
                                    />
                                </div>

                                <div className="pt-6">
                                    <Button type="submit" fullWidth className="bg-dark">
                                        Create event
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </FadeIn>
            </div>
        </AuthenticatedLayout>
    );
}

export default EventCreate