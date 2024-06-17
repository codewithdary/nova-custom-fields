import PageHeader from "../../components/Helper/PageHeader";
import React from "react";
import files from "../../data/files.json"
import {FileIcon, FilterIcon} from "lucide-react";
import { Menu } from '@headlessui/react'
import {ArrowDownTrayIcon, ChevronDownIcon} from "@heroicons/react/16/solid";
import {ButtonIconDefault} from "../../components/Form/ButtonIconDefault";

export const Storage = () => {
    return(
        <div>
            <PageHeader
                header="File Storage"
                subheader="Storage"
            />

            <div className="my-10 bg-white p-3 border-light rounded-lg border-2">
                <div className="flex space-x-4">
                    <ButtonIconDefault
                        icon={<ArrowDownTrayIcon className="w-5 h-5" />}
                        variant="outlined"
                        text="Export"
                    />

                    <ButtonIconDefault
                        icon={<FilterIcon className="w-5 h-5" />}
                        variant="outlined"
                        text="Filter"
                    />
                </div>

            </div>

            <div>
                <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
                    {files.map((faker, fakerKey) => (
                        <div
                            key={fakerKey}
                            className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
                        >
                            <div className="relative px-3 pt-8 pb-5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm">
                                <div className="absolute top-0 left-0 mt-3 ml-3">
                                    <input
                                        className="border"
                                        type="checkbox"
                                        onChange={() => {}}
                                    />
                                </div>
                                {(() => {
                                    if (faker.type == "Empty Folder")
                                        return (
                                            <FileIcon
                                                className="w-2/4 mx-auto"
                                                variant="empty-directory"
                                            />
                                        );
                                    else if (faker.type == "Folder")
                                        return (
                                            <FileIcon
                                                className="w-2/4 mx-auto"
                                                variant="directory"
                                            />
                                        );
                                    else if (faker.type == "Image")
                                        return (
                                            <FileIcon
                                                className="w-2/4 mx-auto"
                                                variant="image"
                                                src={faker["fileName"]}
                                            />
                                        );
                                    else
                                        return (
                                            <FileIcon
                                                className="w-2/4 mx-auto text-xs"
                                                variant="file"
                                                type={faker.type}
                                            />
                                        );
                                })()}
                                <a
                                    href=""
                                    className="block mt-4 font-medium text-center capitalize truncate"
                                >
                                    {
                                        faker.fileName.split("/")[
                                        faker.fileName.split("/").length - 1
                                            ]
                                    }
                                </a>
                                <div className="mt-1 text-xs text-center text-slate-500">
                                    {faker.size}
                                </div>
                                <Menu as="div" className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                                    <Menu.Button
                                        as="a"
                                        className="block w-5 h-5"
                                        href="#"
                                    >
                                        <ChevronDownIcon
                                            icon="MoreVertical"
                                            className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                                        />
                                    </Menu.Button>
                                    <Menu.Items className="w-40">
                                        <Menu.Item className="w-2">
                                            <FileIcon icon="Users" className="w-4 h-4 mr-2" />{" "}
                                            Share File
                                        </Menu.Item>
                                        <Menu.Item>
                                            <FileIcon icon="Trash" className="w-4 h-4 mr-2" />{" "}
                                            Delete
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}