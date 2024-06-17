import '../../../index.css';
import React from "react";
import SectionHeader from "../../../components/Helper/SectionHeader";
import {InputDefault} from "../../../components/Form/InputDefault";
import {SelectDefault} from "../../../components/Form/SelectDefault";
import {RadioButton} from "../../../components/Form/RadioButton";
import {InputWithButton} from "../../../components/Form/InputWithButton";
import DatePicker from "../../../components/Form/DatePicker";
import {Button} from "@material-tailwind/react";
import {CheckboxDefault} from "../../../components/Form/CheckboxDefault";
import {TextEditorDefault} from "../../../components/Form/TextEditorDefault";
import {TextareaDefault} from "../../../components/Form/TextareaDefault";
import {Filepond} from "../../../components/Form/Filepond";
import skills from "../../../data/skills.json"
import {FadeIn} from "../../../components/Helper/FadeIn";
import PageHeader from "../../../components/Helper/PageHeader";

export const EventCreate = ({withHeaders = true}) => {
    return (
        <div>
            {withHeaders && (
                <div>
                    <PageHeader
                        header="Create event"
                        subheader="Events"
                    />
                </div>
            )}

            <FadeIn key="/">
                <div>
                    <Filepond
                        label='Drag & Drop your file or <span class="filepond--label-action">Browse</span> for your banner (optional)'
                    />
                </div>

                <div className="md:grid block md:grid-cols-3 gap-x-10 pt-4 sm:pt-4 pb-4">
                    <div className="col-span-2">
                        <SectionHeader
                            text="General"
                            subheader="Add as much information about your events right here."
                            showSubParagraph={true}
                        />

                        <form action="" className="block md:grid md:grid-cols-2 w-full">
                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <InputDefault
                                    name="title"
                                    type="text"
                                    label="Title"
                                    required={true}
                                />
                            </div>

                            <div>
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Type"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-6 pr-0 md:pr-4">
                                <DatePicker
                                    label="Starting date"
                                />
                            </div>

                            <div>
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Starting time"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-6 pr-0 md:pr-4">
                                <DatePicker
                                    label="Ending date"
                                />
                            </div>

                            <div>
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Ending time"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <SelectDefault
                                    name="timezone"
                                    type="text"
                                    label="Timezone"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pr-0">
                                <InputDefault
                                    name="location"
                                    type="text"
                                    label="Location"
                                    required={false}
                                />
                            </div>

                            <div className="col-span-2">
                                <SectionHeader
                                    text="Tags"
                                    subheader="Make your event more findable by other users."
                                    showSubParagraph={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <SelectDefault
                                    name="audienceTags"
                                    type="text"
                                    label="Audience tags"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div>
                                <SelectDefault
                                    name="contentTags"
                                    type="text"
                                    label="Content tags"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="col-span-2">
                                <SectionHeader
                                    text="How to join"
                                    subheader="Add more information about how users could join."
                                    showSubParagraph={true}
                                />
                            </div>

                            <div className="col-span-2 md:pb-8 pb-0 pr-0">
                                <InputDefault
                                    name="meetingUrl"
                                    type="text"
                                    label="Meeting URL"
                                    required={false}
                                />
                            </div>

                            <div className="col-span-2 md:pb-8 pb-0 pr-0">
                                <TextareaDefault
                                    name="additional"
                                    type="text"
                                    label="Additional information"
                                    required={true}
                                />
                            </div>

                            <div className="col-span-2">
                                <SectionHeader
                                    text="Host Details"
                                    subheader="Add more information about the host."
                                    showSubParagraph={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <InputDefault
                                    name="hostName"
                                    type="text"
                                    label="Host name"
                                    required={false}
                                />
                            </div>

                            <div>
                                <InputDefault
                                    name="hostEmail"
                                    type="text"
                                    label="Host email"
                                    required={false}
                                />
                            </div>

                            <div className="col-span-2">
                                <TextEditorDefault />
                            </div>

                            <div className="col-span-2 pt-9">
                                <SectionHeader
                                    text="Event description & agenda"
                                    subheader="Describe the event & what the talking points are."
                                    showSubParagraph={true}
                                />
                            </div>

                            <div className="pb-8 col-span-2">
                                <TextEditorDefault />
                            </div>

                            <div className="col-span-2">
                                <TextEditorDefault
                                    placeholder="fwesf"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-span-1 z-1 pt-6 md:pt-0">
                        <div className="flex flex-col">
                            <SectionHeader
                                text="Index Status"
                                subheader="How should the public see it?"
                                showSubParagraph={true}
                            />

                            <RadioButton
                                label="Live"
                                hasDescription={true}
                                description="Show event in dashboard and make it available for registration"
                                name="description"
                            />

                            <RadioButton
                                label="Draft"
                                hasDescription={true}
                                description="Hide event from dashboard and make it unavailable for registration."
                                name="description"
                            />
                        </div>

                        <div className="pt-6">
                            <SectionHeader
                                text="Notifications"
                                subheader="Notify users about changes"
                                showSubParagraph={true}
                            />

                            <CheckboxDefault
                                header="Notify"
                                description="Notify participants about changes"
                            />
                        </div>

                        <div className="pt-6">
                            <SectionHeader
                                text="Public link"
                                subheader="Share it with others"
                                showSubParagraph={true}
                            />

                            <InputWithButton
                                type="email"
                                btnText="Copy Link"
                                label="https://www.bii-intranet.dk/event/10"
                            />
                        </div>

                        <div className="pt-6">
                            <form action="">
                                <Button fullWidth className="bg-dark">
                                    Create event
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}