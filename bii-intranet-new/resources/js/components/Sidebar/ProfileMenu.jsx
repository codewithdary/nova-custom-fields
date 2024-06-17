import React from "react";
import profile from "../../data/profile.jsx"
import {ArrowLeftCircleIcon} from "@heroicons/react/24/outline";
import {Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography,} from "@material-tailwind/react";

export const ProfileMenu = ({ user }) => {
    const initials = user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase();

    return (
        <Menu>
            <MenuHandler>
                {user.avatar ? (
                    <div>
                        <Avatar
                            variant="circular"
                            alt={"avatar of " + user.firstname}
                            className="cursor-pointer"
                            src={user.avatar}
                        />
                        <span className="absolute left-6 bottom-5 right-0 block translate-x-1/2 translate-y-1/2 transform ">
                            <span className="block h-2 w-2 rounded-full bg-green-400" />
                        </span>
                    </div>
                ) : (
                     <div>
                         <span className="hover:cursor-pointer flex mx-auto w-12 h-12 shrink-0 text-normal items-center text-center justify-center rounded-full border border-nav transition-all bg-nav text-[0.625rem] text-gray-400 font-extrabold">
                           {initials}
                       </span>

                         <span className="absolute left-6 bottom-5 right-0 block translate-x-1/2 translate-y-1/2 transform ">
                            <span className="block h-2 w-2 rounded-full bg-green-400" />
                        </span>
                     </div>
                )}
            </MenuHandler>

            <MenuList>
                {profile.map((item) => (
                    <a href={item.href} className="hover:decoration-0 hover:outline-0 font-poppins">
                    <MenuItem className="flex items-center gap-2" key={item.name}>
                        <Typography variant="small" className="text-nav text-[14px] transition-all items-center tracking-normal">
                                <item.icon
                                    className="w-5 inline"
                                    aria-hidden="true"
                                />

                                <span className="pl-2">
                                    {item.name}
                                </span>
                        </Typography>
                    </MenuItem>
                    </a>
                ))}

                <hr
                    className="my-2 border-blue-gray-50 hover:border-blue-gray-0"
                />

                <MenuItem className="flex items-center gap-2">
                    <ArrowLeftCircleIcon
                        className="w-5"
                    />

                    <Typography variant="small" className="text-nav text-[14px] transition-all items-center tracking-normal">
                        Sign out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}