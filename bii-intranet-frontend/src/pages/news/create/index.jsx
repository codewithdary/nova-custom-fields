import '../../../index.css';
import React from "react";
import SectionHeader from "../../../components/Helper/SectionHeader";
import {InputDefault} from "../../../components/Form/InputDefault";
import {SelectDefault} from "../../../components/Form/SelectDefault";
import {RadioButton} from "../../../components/Form/RadioButton";
import {Button} from "@material-tailwind/react";
import {CheckboxDefault} from "../../../components/Form/CheckboxDefault";
import {TextEditorDefault} from "../../../components/Form/TextEditorDefault";
import {Filepond} from "../../../components/Form/Filepond";
import skills from "../../../data/skills.json"
import {FadeIn} from "../../../components/Helper/FadeIn";
import PageHeader from "../../../components/Helper/PageHeader";

export const NewsCreate = ({withHeaders = true}) => {
    return (
        <div>
            {withHeaders && (
                <div>
                    <PageHeader
                        header="Create news"
                        subheader="News"
                    />
                </div>
            )}

            <FadeIn key="/">
                <div className="md:grid block md:grid-cols-3 gap-x-10 pt-4 sm:pt-10 pb-4">
                    <div className="col-span-2">
                        <SectionHeader
                            text="General"
                            subheader="Add as much information about your news right here."
                            showSubParagraph={true}
                        />

                        <form action="" className="block  w-full">
                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <InputDefault
                                    name="title"
                                    type="text"
                                    label="Title"
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Content tags"
                                    rows={skills}
                                    required={true}
                                />
                            </div>

                            <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                <TextEditorDefault
                                    height={500}
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-span-1 z-1 pt-6 md:pt-0">
                        <div className="flex flex-col">

                            <div className="pb-4">
                                <SectionHeader
                                    text="Banner"
                                    subheader="What banner should be shown?"
                                    showSubParagraph={true}
                                />

                                <Filepond
                                    label='Drag & Drop your file or <span class="filepond--label-action">Browse</span> for your banner (optional)'
                                />
                            </div>

                            <SectionHeader
                                text="News status"
                                subheader="How should the public see it?"
                                showSubParagraph={true}
                            />

                            <RadioButton
                                label="Live"
                                hasDescription={true}
                                description="News will be accessible to the audience instantly."
                                name="description"
                            />

                            <RadioButton
                                label="Draft"
                                hasDescription={true}
                                description="News is not ready for publication or broadcasting."
                                name="description"
                            />
                        </div>

                        <div className="pt-6">
                            <SectionHeader
                                text="Notifications"
                                subheader="Should all users be notified of the new news?"
                                showSubParagraph={true}
                            />

                            <CheckboxDefault
                                header="Notify"
                                description="Email all users about new news creation"
                            />
                        </div>

                        <div className="pt-6">
                            <form action="">
                                <Button fullWidth className="bg-dark">
                                    Create news
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}