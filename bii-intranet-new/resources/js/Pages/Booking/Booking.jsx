import React from "react";
import {Head} from "@inertiajs/react";
import rooms from "../../data/rooms.jsx"
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {BuildingOfficeIcon} from "@heroicons/react/24/outline";
import PageHeader from "../../components/Helper/PageHeader.jsx";
import { Stepper, Step, Button } from "@material-tailwind/react";
import {InputDefault} from "../../components/Form/InputDefault.jsx";
import BookingRadio from "../../components/Booking/BookingRadio.jsx";
import {SelectDefault} from "../../components/Form/SelectDefault.jsx";
import BookingHeader from "../../components/Booking/BookingHeader.jsx";
import BookingDatePicker from "../../components/Booking/BookingDatePicker.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {CalendarIcon, CheckCircleIcon, ExclamationCircleIcon} from "@heroicons/react/24/outline/index.js";

const Booking = ({ ...props }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <div>
                <PageHeader
                    header="Book a workspace"
                    subheader="NFS booking"
                />
            </div>

            <div className="w-full pt-10">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                    activeLineClassName="bg-dark"
                    activeClassName="bg-dark text-nav-hover">
                    <Step
                        onClick={() => setActiveStep(0)}
                        className="shadow-xl"
                        activeClassName="bg-dark text-nav-hover hover:cursor-pointer"
                        completedClassName="bg-dark text-nav-hover">
                        <ExclamationCircleIcon className="h-5 w-5" />
                    </Step>

                    <Step
                        onClick={() => setActiveStep(1)}
                        className="shadow-xl hover:cursor-pointer"
                        activeClassName="bg-dark text-nav-hover"
                        completedClassName="bg-dark text-nav-hover">
                        <BuildingOfficeIcon
                            className="h-5 w-5"
                        />
                    </Step>

                    <Step
                        onClick={() => setActiveStep(2)}
                        activeClassName="bg-dark text-nav-hover hover:cursor-pointer"
                        className="shadow-xl"
                        completedClassName="bg-dark text-nav-hover">
                        <CalendarIcon
                            className="h-5 w-5"
                        />
                    </Step>

                    <Step
                        activeClassName="bg-dark text-nav-hover hover:cursor-pointer"
                        className="shadow-xl"
                        completedClassName="bg-dark text-nav-hover">
                        <CheckCircleIcon
                            className="h-5 w-5"
                        />
                    </Step>
                </Stepper>

                {activeStep === 0 &&
                    <FadeIn>
                        <div className="mx-auto flex items-center justify-center max-w-5xl flex-col text-center pt-10 sm:h-[320px]">
                            <BookingHeader
                                title={props.auth.user.firstname ? "Hi " + props.auth.user.firstname + ", want to book a workspace? 👋" : "Book a workspace"}
                                description="You are about to book an ideal workspace through NFS Booking. Before you proceed, we require a few details..."
                            />
                        </div>
                    </FadeIn>
                }

                {activeStep === 1 &&
                    <FadeIn>
                        <div className="pt-10 sm:mx-auto flex items-center justify-center w-full flex-col text-center">
                            <BookingHeader
                                title="What space are you looking for?"
                            />

                            <div className="w-full sm:w-[450px] mt-6 sm:mt-10 text-left">
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Cobid"
                                    rows={rooms}
                                    required={false}
                                />
                            </div>

                            <div className="w-full sm:w-[450px] sm:pt-6 text-left">
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Area"
                                    rows={rooms}
                                    required={false}
                                />
                            </div>

                            <div className="w-full sm:w-[450px] sm:pt-6 text-left">
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Meeting room"
                                    rows={rooms}
                                    required={false}
                                />
                            </div>

                            <div className="w-full sm:w-[450px] sm:pt-6 text-left">
                                <SelectDefault
                                    name="type"
                                    type="text"
                                    label="Normal"
                                    rows={rooms}
                                    required={false}
                                />
                            </div>
                        </div>
                    </FadeIn>
                }

                {activeStep === 2 &&
                    <FadeIn>
                        <div className="pt-10 sm:mx-auto flex items-center justify-center w-full flex-col h-full text-center">
                            <BookingHeader
                                title="Choose a date & time"
                            />

                            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 mx-auto items-center justify-center  flex-col text-center pt-6 sm:pt-10">
                                <BookingDatePicker />

                                <div className="grid grid-cols-1 text-left">
                                    <span className="w-full sm:mb-6">
                                        <SelectDefault
                                            name="type"
                                            type="text"
                                            label="Time"
                                            rows={rooms}
                                            required={false}
                                        />
                                  </span>

                                    <span className="sm:mb-6">
                                        <SelectDefault
                                            name="type"
                                            type="text"
                                            label="Duration"
                                            rows={rooms}
                                            required={false}
                                        />
                                    </span>

                                    <span className="sm:mb-6">
                                        <InputDefault
                                            id="title"
                                            name="title"
                                            type="text"
                                            label="Number of people"
                                            required={true}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                }

                {activeStep === 3 &&
                    <FadeIn>
                        <div className="pt-10 mx-auto flex items-center justify-center flex-col text-center w-full">
                            <BookingHeader
                                title="Here are the available workspaces"
                            />
                        </div>

                        <div className="w-full pt-6 pb-6 sm:pb-0 sm:pt-10 text-left">
                            <BookingRadio />
                        </div>
                    </FadeIn>
                }

                <div className="mt-0 sm:mt-10 flex justify-between">
                    <Button className="normal-case font-poppins bg-dark" onClick={handlePrev} disabled={isFirstStep}>
                        Previous
                    </Button>

                    <Button className="normal-case font-poppins bg-dark" onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Booking