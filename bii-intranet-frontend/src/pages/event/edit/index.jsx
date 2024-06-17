import '../../../index.css';
import React from "react";
import PageHeader from "../../../components/Helper/PageHeader";
import {Tab, TabPanel, Tabs, TabsBody, TabsHeader} from "@material-tailwind/react";
import {EnvelopeOpenIcon, FolderOpenIcon, NewspaperIcon, UsersIcon, AtSymbolIcon} from "@heroicons/react/24/outline";
import {EventCreate} from "../create";

export const EventEdit = () => {
    const [activeTab, setActiveTab] = React.useState("details");
    const data = [
        {
            label: "Details",
            value: "details",
            icon: NewspaperIcon,
        },
        {
            label: "Invite",
            value: "invite",
            icon: EnvelopeOpenIcon,
        },
        {
            label: "Participants",
            value: "participants",
            icon: UsersIcon,
        },
        {
            label: "Documents",
            value: "Documents",
            icon: FolderOpenIcon,
        },
        {
            label: "Email",
            value: "email",
            icon: AtSymbolIcon,
        },
    ];
    return (
        <div>
            <div>
                <PageHeader
                    header="Edit event"
                    subheader="Events"
                />
            </div>

            <div className="pt-4 sm:pt-10 pb-4">
                 <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-[36rem]"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-nav shadow-none rounded-none",
                        }}>
                        {data.map(({ label, value, icon }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-nav font-bold font-poppins justify-start px-0" : "items-start text-nav font-poppins justify-start px-3"}>
                                <div className="flex items-center gap-2">
                                    {React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value }) => (
                            <TabPanel key={value} value={value} className="px-0">
                                {value === "details" && (
                                    <div className="pt-6">
                                        <EventCreate
                                            withHeaders={false}
                                        />
                                    </div>
                                )}
                            </TabPanel>
                        ))}
                    </TabsBody>

                     <TabsBody>
                         {data.map(({ value }) => (
                             <TabPanel key={value} value={value} className="px-0">
                                 {value === "email" && (
                                     <div className="pt-6">

                                     </div>
                                 )}
                             </TabPanel>
                         ))}
                     </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}