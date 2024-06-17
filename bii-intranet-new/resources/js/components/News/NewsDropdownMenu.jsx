import {Menu, MenuHandler, MenuList, MenuItem, Typography} from "@material-tailwind/react";
import {EllipsisVerticalIcon} from "@heroicons/react/16/solid/index.js";
import {PencilSquareIcon} from "@heroicons/react/24/outline";
import React from "react";
import {DeleteModal} from "../Modal/DeleteModal.jsx";

export function NewsDropdownMenu({ id, title }) {
    return (
        <Menu>
            <MenuHandler>
                <EllipsisVerticalIcon
                    className="w-6 text-nav hover:text-nav-hover transition-all hover:cursor-pointer pt-3"
                />
            </MenuHandler>

            <MenuList className="p-0 focus:ring-0 focus:border-none">
                    <MenuItem className="flex items-center gap-2 text-nav hover:text-nav-hover transition-all hover:cursor-pointer pl-4"
                      onClick={() => {
                          window.location.href="/news/" + id + "/edit";
                      }}>
                    <PencilSquareIcon
                        className="w-5"
                    />
                    <Typography variant="small" className="font-medium">
                        Edit
                    </Typography>
                </MenuItem>

                <DeleteModal
                    id={id}
                    url="/news/"
                    bodyText={"You are about to delete '" + title + "'. Are you sure that you want to do this? Please note that you cannot undo this action, as the news will be permanently deleted."}
                    buttonText="Delete"
                    headerText="Are you certain you want to delete this news article?"
                />
            </MenuList>
        </Menu>
    );
}
