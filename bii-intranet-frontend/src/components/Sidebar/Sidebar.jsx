import React from "react";
import {ChevronRightIcon} from '@heroicons/react/24/outline'
import {ArrowPathIcon, ChevronDownIcon,} from "@heroicons/react/16/solid";
import {Button} from "@material-tailwind/react";
import {Logo} from "../Helper/Logo";
import {ProfileMenu} from "./ProfileMenu";
import {Association} from "./Association";
import { Disclosure } from '@headlessui/react'
import navigation from "../../data/navigation"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Sidebar = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <div>
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-dark px-6 pb-4">
                        <div className="flex h-16 pt-4 shrink-0 items-center">
                            <Logo />
                        </div>

                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-5">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                {!item.children ? (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-xs text-nav bg-white rounded-l-3xl'
                                                                : 'text-nav text-xs transition-all hover:text-nav-hover',
                                                                'group flex gap-x-3 rounded-md p-2 text-nav leading-6 font-semibold items-center'
                                                        )}>

                                                        <item.icon
                                                            className="h-5 w-5 shrink-0"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <Disclosure as="div">
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'text-xs text-nav bg-white rounded-l-3xl'
                                                                            : 'text-nav text-xs transition-all hover:text-nav-hover',
                                                                            'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                                                                    )}>

                                                                    <item.icon
                                                                        className="h-5 w-5 shrink-0"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}

                                                                    <ChevronDownIcon
                                                                        className={classNames(
                                                                            open ? 'rotate-180 text-nav' : 'text-nav',
                                                                            'ml-auto h-4 w-4 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                </Disclosure.Button>

                                                                <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                                    {item.children.map((subItem) => (
                                                                        <li key={subItem.name}>
                                                                            <Disclosure.Button
                                                                                as="a"
                                                                                href={subItem.href}
                                                                                className={classNames(
                                                                                    subItem.current
                                                                                        ? 'text-xs text-nav bg-white rounded-l-3xl'
                                                                                        : 'text-nav text-xs transition-all hover:text-nav-hover',
                                                                                        'block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                                                                )}>
                                                                                {subItem.name}
                                                                            </Disclosure.Button>
                                                                        </li>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <Association />

                                <li className="-mx-6 mt-auto">
                                    <a
                                        href="/settings"
                                        className="flex items-center gap-x-4 px-6 py-1 text-sm font-semibold text-white">
                                        <Button
                                            variant="outlined"
                                            className="flex items-center gap-3 outline-nav py-2 w-full text-nav normal-case border-nav hover:border-nav-hover hover:text-nav-hover focus:ring-gray-0">
                                            <ArrowPathIcon
                                                className="w-4"
                                            />
                                            Change Settings
                                        </Button>
                                    </a>

                                    <div className="mx-auto text-center pt-4">
                                        <ProfileMenu
                                            hasImage={true}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
