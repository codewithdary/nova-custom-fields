import React from "react";
import {Logo} from "../Helper/Logo";
import {usePage} from "@inertiajs/react";
import {GroupItem} from "./GroupItem.jsx";
import {ProfileMenu} from "./ProfileMenu";
import {GlobalSearch} from "./GlobalSearch.jsx";
import {Button} from "@material-tailwind/react";
import content from "../../data/sidebar/content"
import community from "../../data/sidebar/community"
import dashboard from "../../data/sidebar/dashboard"
import utilities from "../../data/sidebar/utilities"
import navigation from "../../data/sidebar/navigation"
import {ArrowPathIcon} from '@heroicons/react/24/outline'

export const Sidebar = () => {
    const { auth } = usePage().props
    const navigationItems = navigation(auth);
    const contentItems = content(auth);
    const communityItems = community(auth);
    const dashboardItems = dashboard(auth);
    const utilitiesItems = utilities(auth);

    return (
        <div>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[250px] lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-dark px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center pt-4">
                        <Logo
                            hasColor={false}
                        />
                    </div>

                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-2">
                            <li>
                                <GroupItem
                                    items={dashboardItems}
                                />
                            </li>

                            <li>
                                <GroupItem
                                    items={contentItems}
                                    label="Content"
                                />
                            </li>

                            <li>
                                <GroupItem
                                    items={navigationItems}
                                    label="Program"
                                />
                            </li>

                            <li>
                                <GroupItem
                                    items={communityItems}
                                    label="Community"
                                />
                            </li>

                            <li>
                                <GroupItem
                                    items={utilitiesItems}
                                    label="Utilities"
                                />
                            </li>

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
                                        user={auth.user}
                                    />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <GlobalSearch />
        </div>
    )
}
