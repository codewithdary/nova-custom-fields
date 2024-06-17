import React from "react";
import Mail from "../../../svg/mail.svg"
import {usePage, Head} from "@inertiajs/react";
import {Button} from "@material-tailwind/react";
import GuestLayout from "../../components/Layout/GuestLayout.jsx";
import {InputDefault} from "../../components/Form/InputDefault.jsx";
import useForgotPasswordForm from "../../components/Request/ForgotPasswordFormSubmit.jsx";

export default function ForgotPassword({ title }) {
    const { errors } = usePage().props
    const { values, handleChange, handleSubmit } = useForgotPasswordForm(errors);

    return (
        <GuestLayout>
            <Head title={title} />

            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md w-full text-center">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-primary-header">
                        Reset your password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <div className="mt-2">
                                    <InputDefault
                                        id="email"
                                        type="text"
                                        name="Email"
                                        label="Email"
                                        required={true}
                                        value={values.email}
                                        error={errors.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <Button type="submit" fullWidth className="bg-dark">
                                    Submit
                                </Button>
                            </div>
                        </form>

                        <div>
                            <div className="relative mt-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200" />
                                </div>

                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-primary-header">
                                        Having issues?
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-4">
                                <p className="text-primary-header text-center text-xs">
                                    If you've forgotten the email address you use to log into our intranet, we suggest reaching out to Bo Heinemann, our BII intranet administrator.
                                </p>

                                <a
                                    href="mailto:intranet@bii.dk?subject=Issues logging in the BII intranet"
                                    className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-primary-header shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-lightest transition-all focus-visible:ring-transparent">

                                    <div className="flex items-center text-sm font-semibold leading-6">
                                        <img src={Mail} alt="icon"/>
                                        <span>
                                            intranet@bii.dk
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
