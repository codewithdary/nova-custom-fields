import React, {useState} from "react";
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";

export const GlobalSearch = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="lg:pl-60">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setSidebarOpen(true)}>

                    <Bars3Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </button>

                <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form className="relative flex flex-1">
                        <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 left-0 h-full w-6 text-nav-hover"
                            aria-hidden="true"
                        />

                        <input
                            id="search-field"
                            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-dark placeholder:text-nav-hover focus:ring-0 sm:text-sm"
                            placeholder="Search for data"
                            type="search"
                            name="search"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}