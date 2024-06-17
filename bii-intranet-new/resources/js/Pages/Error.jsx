import {Head} from "@inertiajs/react";
import {UsersIcon, BookOpenIcon} from "@heroicons/react/16/solid";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {Logo} from "../components/Helper/Logo.jsx";
import React from "react";
import GuestLayout from "../components/Layout/GuestLayout.jsx";

export default function Error({ status }) {
    const title = {
        503: '503: Service unavailable',
        500: '500: Server error',
        419: '419: Page expired',
        404: '404: Page not found',
        403: '403: Forbidden',
        401: '401: Token expired',
    }[status]

    const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        419: 'Sorry, your page has expired. Please try again.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
        401: 'Sorry, your token has expired. Please try resetting your password again',
    }[status]

    const links = [
        {
            name: 'Documentation',
            href: 'https://docs.bii-intranet.dk/',
            description: 'Learn how to use our intranet.',
            icon: BookOpenIcon,
        },
        {
            name: 'Login',
            href: 'https://bii-intranet.dk',
            description: 'Easily access the intranet with your account..',
            icon: UsersIcon,
        },
        {
            name: 'News',
            href: 'https://bii-intranet.dk/news',
            description: 'The latest news and updates from across our organization.',
            icon: UsersIcon,
        },
    ]

    return (
        <GuestLayout>
            <Head title={title} />

            <div>
                <main className="mx-auto w-full max-w-7xl px-6 mt-10">
                    <Logo
                        hasColor={true}
                    />

                    <div className="mx-auto mt-4 max-w-2xl text-center sm:mt-8">
                        <p className="text-base font-semibold leading-8 text-nav">
                            {status}
                        </p>

                        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {title}
                        </h1>

                        <p className="mt-4 leading-7 text-nav sm:mt-6 sm:text-md sm:leading-8">
                            {description}
                        </p>
                    </div>

                    <div className="mx-auto mt-10 flow-root max-w-lg sm:mt-14">
                        <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                            {links.map((link, linkIdx) => (
                                <li key={linkIdx} className="relative flex gap-x-6 py-6">
                                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-primary-header/10">
                                        <link.icon
                                            className="h-6 w-6 text-nav"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="flex-auto">
                                        <h3 className="text-sm font-semibold leading-6 text-primary-header">
                                            <a href={link.href}>
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {link.name}
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-nav">
                                            {link.description}
                                        </p>
                                    </div>

                                    <div className="flex-none self-center">
                                        <ChevronRightIcon
                                            className="h-5 w-5 text-nav"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>

                <footer className="border-t border-gray-100 py-6">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
                        <p className="text-sm leading-7 text-nav">
                            &copy; <a href="https://bii-intranet.dk">BII Intranet </a> all rights reserved 2024
                        </p>
                        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />
                    </div>
                </footer>
            </div>
        </GuestLayout>
    )
}