import React from "react";
import {Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography,} from "@material-tailwind/react";
import {ArrowLeftCircleIcon, NewspaperIcon, UserCircleIcon, PencilSquareIcon} from "@heroicons/react/24/outline";

const navigation = [
    { name: 'My Profile', href: '/profile', icon: UserCircleIcon, current: true },
    { name: 'Release Notes', href: '/releaseNotes', icon: PencilSquareIcon, current: false },
    { name: 'Documentation', href: '/documentation', icon: NewspaperIcon, current: false },
]

export const ProfileMenu = ({hasImage}) => {
    return (
        <Menu>
            <MenuHandler>
                {hasImage ? (
                    <Avatar
                        variant="circular"
                        alt="Avatar of Dary Nazar"
                        className="cursor-pointer"
                        src="https://yt3.googleusercontent.com/-WCYFhpqKRyPbs9-ernsouHzls8ZX1rxA5g3pt4eVxgF-qHGZcQyjKmuNxxv91imrhwk-KXdohA=s176-c-k-c0x00ffffff-no-rj"
                    />
                ) : (
                    <span className="hover:cursor-pointer flex mx-auto w-12 h-12 shrink-0 text-normal items-center text-center justify-center rounded-full border border-nav transition-all hover:text-primary-header bg-nav hover:bg-nav-hover text-[0.625rem] text-gray-400 group-hover:text-white font-extrabold">
                        DN
                    </span>
                )}
            </MenuHandler>

            <MenuList>
                {navigation.map((item) => (
                    <MenuItem className="flex items-center gap-2" key={item.name}>
                        <Typography variant="small" className="font-medium">
                            <a href={item.href}>
                                <item.icon
                                    className="w-5 inline"
                                    aria-hidden="true"
                                />

                                <span className="pl-2">
                                    {item.name}
                                </span>
                            </a>
                        </Typography>
                    </MenuItem>
                ))}

                <hr
                    className="my-2 border-blue-gray-50 hover:border-blue-gray-0"
                />

                <MenuItem className="flex items-center gap-2 ">
                    <ArrowLeftCircleIcon
                        className="w-5"
                    />
                    <Typography variant="small" className="font-medium">
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}