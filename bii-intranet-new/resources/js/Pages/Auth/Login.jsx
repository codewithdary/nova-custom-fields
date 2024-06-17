import React from "react";
import {usePage, Head} from "@inertiajs/react";
import {Button} from "@material-tailwind/react";
import {InputDefault} from "../../components/Form/InputDefault.jsx";
import useLoginForm from "../../components/Request/LoginFormSubmit.jsx";
import GuestLayout from "../../components/Layout/GuestLayout.jsx";

export default function Login({ title, resetPasswordRoute }) {
    const { errors } = usePage().props
    const { values, handleChange, handleSubmit } = useLoginForm(errors);

    return (
        <GuestLayout>
            <Head title={title} />

            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md w-full text-center">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-primary-header">
                        Sign in to the BII intranet
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
                                        label="Email address"
                                        placeholder="name@address.com"
                                        required={true}
                                        value={values.email}
                                        error={errors.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mt-2">
                                    <InputDefault
                                        id="password"
                                        name="Password"
                                        type="password"
                                        label="Password"
                                        required={true}
                                        placeholder="Enter your password"
                                        error={errors.password}
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        name="remember"
                                        value={values.remember}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-300 text-primary-header focus:ring-primary-header"
                                    />

                                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-primary-header">
                                        Remember me
                                    </label>
                                </div>

                                {resetPasswordRoute && (
                                    <div className="text-sm leading-6">
                                        <a href={resetPasswordRoute} className="font-semibold text-primary-header hover:underline transition-all">
                                            Forgot password?
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div>
                                <Button type="submit" fullWidth className="bg-dark">
                                    Sign in
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
                                    Or continue with
                                </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-4">
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-primary-header shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-lightest transition-all focus-visible:ring-transparent">
                                    <svg
                                        className="h-5 w-5 fill-[#24292F]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 23 23">
                                        <path
                                            fill="#f3f3f3"
                                            d="M0 0h23v23H0z"
                                        />
                                        <path
                                            fill="#f35325"
                                            d="M1 1h10v10H1z"
                                        />
                                        <path
                                            fill="#81bc06"
                                            d="M12 1h10v10H12z"
                                        />
                                        <path
                                            fill="#05a6f0"
                                            d="M1 12h10v10H1z"
                                        />
                                        <path
                                            fill="#ffba08"
                                            d="M12 12h10v10H12z"
                                        />
                                    </svg>
                                    <span className="text-sm font-semibold leading-6">
                                    Microsoft
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
