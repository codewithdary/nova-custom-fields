import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button
} from "@material-tailwind/react";
import {ChatBubbleLeftEllipsisIcon} from "@heroicons/react/16/solid";
import SectionHeader from "../Helper/SectionHeader";
import {TextareaDefault} from "./TextareaDefault";
import {InputDefault} from "./InputDefault";
import {ButtonDefault} from "./ButtonDefault";
import {RadioButton} from "./RadioButton";
import React from "react";

export const Feedback = () => {
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
                <form method="">
                    <div className="border-b-2 border-gray-200">
                        <SectionHeader
                            text="Feedback"
                            subheader="Want to provide us with some feedback?"
                            showSubParagraph={true}
                        />
                    </div>

                    <div className="col-span-2 sm:pb-0 pb-6 pt-4 w-full">
                        <InputDefault
                            name="URL"
                            type="text"
                            label="URL"
                            required={false}
                        />
                    </div>

                    <div className="col-span-2 pt-4 sm:pb-0 pb-6 w-full">
                        <TextareaDefault
                            name="description"
                            type="text"
                            label="Description"
                            required={true}
                        />
                    </div>

                    <div className="gap-6 font-poppins">
                       <div className="block pt-2">
                           <RadioButton
                               label="Feedback"
                               hasDescription={true}
                               description="Let us know if something should be improved."
                               name="feedback"
                           />
                       </div>

                        <div>
                            <RadioButton
                                label="Bug"
                                hasDescription={true}
                                description="Let us know if something is broken."
                                name="feedback"
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <ButtonDefault
                            variant="filled"
                            text="Submit feedback / bug"
                        />
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}