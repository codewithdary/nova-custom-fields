import React from "react";
import {RadioButton} from "../../components/Form/RadioButton";
import {InputDefault} from "../../components/Form/InputDefault";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import SectionHeader from "../../components//Helper/SectionHeader";
import {ChatBubbleLeftEllipsisIcon} from "@heroicons/react/16/solid";
import {TextareaDefault} from "../../components/Form/TextareaDefault";
import useFeedbackForm from "../../components/Request/FeedbackFormSubmit.jsx";
import {Popover, PopoverHandler, PopoverContent, Button} from "@material-tailwind/react";

export default function Feedback() {
    const { values, handleChange, handleSubmit } = useFeedbackForm();

    return (
        <Popover
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
            <PopoverHandler>
                <Button className="rounded-full normal-case bg-dark py-3 px-3">
                    <ChatBubbleLeftEllipsisIcon
                        className="w-6"
                    />
                </Button>
            </PopoverHandler>

            <PopoverContent className="z-50 sm:w-fit w-full">
                <form onSubmit={handleSubmit}>
                    <div className="border-b-2 border-gray-200">
                        <SectionHeader
                            text="Feedback"
                            subheader="Want to provide us with some feedback?"
                            showSubParagraph={true}
                        />
                    </div>

                    <div className="col-span-2  pb-0 pt-4 w-full">
                        <InputDefault
                            id="url"
                            name="URL"
                            type="url"
                            label="URL"
                            required={false}
                            value={values.url}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-span-2 sm:pt-4 pt-0  pb-0 w-full">
                        <TextareaDefault
                            type="text"
                            id="description"
                            name="description"
                            label="Description"
                            required={true}
                            onChange={handleChange}
                            value={values.description}
                        />
                    </div>

                    <div className="gap-6 font-poppins">
                       <div className="block pt-2">
                           <RadioButton
                               id="type"
                               name="type"
                               type="radio"
                               value="feedback"
                               label="Feedback"
                               hasDescription={true}
                               onChange={handleChange}
                               description="Let us know if something should be improved."
                           />
                       </div>

                        <div>
                            <RadioButton
                                id="type"
                                name="type"
                                label="Bug"
                                value="bug"
                                type="radio"
                                hasDescription={true}
                                onChange={handleChange}
                                description="Let us know if something is broken."
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <ButtonDefault
                            type="submit"
                            variant="filled"
                            text="Submit feedback / bug"
                        />
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
