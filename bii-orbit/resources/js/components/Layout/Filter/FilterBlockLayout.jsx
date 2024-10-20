import React from "react";
import { HeaderRow } from "../../../helper/Text/HeaderRow.jsx";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';

export default function FilterBlockLayout({ title, description, children, hasDisclosure = true, classNames = '' }) {
    return (
        <>
            {children.length > 0 ? (
                <div className={`pb-2 border-b border-stroke ${classNames}`}>
                    <div className="mx-auto">
                        <Disclosure as="div" defaultOpen>
                            {({ open }) => {
                                const chevronIcons = [
                                    <ChevronUpIcon aria-hidden="true" className="background_icon" key="up" />,
                                    <ChevronDownIcon aria-hidden="true" className="background_icon" key="down" />
                                ];

                                return (
                                    <>
                                        {hasDisclosure ? (
                                            <DisclosureButton className="disclosure__button pb-3">
                                                <HeaderRow
                                                    title={title}
                                                    subtitle={description}
                                                    titleClass="header__three font-semibold text-sm"
                                                />

                                                <span className="chevron__spacing">
                                                    {open ? chevronIcons[1] : chevronIcons[0]}
                                                </span>
                                            </DisclosureButton>
                                        ) : (
                                            <div className="pb-3">
                                                <HeaderRow
                                                    title={title}
                                                    subtitle={description}
                                                    titleClass="header__three font-semibold text-sm"
                                                />
                                            </div>
                                        )}

                                        <Transition
                                            show={open}
                                            leaveTo="opacity-0"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leaveFrom="opacity-50"
                                            enter="transition-opacity duration-50"
                                            leave="transition-opacity duration-50"
                                        >
                                            <DisclosurePanel as="dd" className="transition-all duration-100 ease-in-out">
                                                <div className="text-sm font-medium leading-6 sm:mt-0 mx-auto pb-3">
                                                    <div className={`grid grid-cols-1 lg:grid-cols-1 gap-2`}>
                                                        {children}
                                                    </div>
                                                </div>
                                            </DisclosurePanel>
                                        </Transition>
                                    </>
                                );
                            }}
                        </Disclosure>
                    </div>
                </div>
            ) : null}
        </>
    );
}
