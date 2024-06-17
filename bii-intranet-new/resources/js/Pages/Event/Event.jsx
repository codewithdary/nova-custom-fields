// import CalenderFull from "../../components/Helper/CalenderFull";
import React from "react";
import {Head} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import PageHeader from "../../components/Helper/PageHeader";
import {Pagination} from "../../components/Table/Paginaton";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import {EventTableBody} from "../../components/Event/EventTableBody.jsx";
import {CalendarDaysIcon, ListBulletIcon} from "@heroicons/react/16/solid";
import {EventTableHeaders} from "../../components/Event/EventTableHeaders.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {EventTableHeaderOptions} from "../../components/Event/EventTableHeaderOptions.jsx";
import {Card, CardBody, Tab, TabPanel, Tabs, TabsBody, TabsHeader} from "@material-tailwind/react";
import CalenderFull from "../../components/Helper/CalenderFull.jsx";

const Event = ({auth, ...props }) => {
    const [activeTab, setActiveTab] = React.useState("table");
    const header = window.location.pathname === '/events'
        ? 'Events overview'
        : window.location.pathname === '/events/bii'
            ? 'BII events'
            : 'Events you participate';

    const data = [
        {
            label: "List layout",
            value: "table",
            icon: ListBulletIcon,
        },
        {
            label: "Calendar",
            value: "calendar",
            icon: CalendarDaysIcon,
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <div className="grid grid-cols-2 border-b-2 border-gray-100">
                <div>
                    <PageHeader
                        header={header}
                        subheader="Events"
                    />
                </div>

                {auth.user.isBiiUser &&(
                    <div className="float-right flex justify-end my-auto">
                        <a href={props.createUrl}>
                            <ButtonDefault
                                variant="filled"
                                text="New event"
                            />
                        </a>
                    </div>
                )}
            </div>

            <FadeIn key="/">
                <div className="pt-4 sm:pt-10 pb-4">
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-none bg-transparent p-0 w-60 float-right z-0"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-nav shadow-none rounded-none border-transparent",
                            }}>

                            {data.map(({ label, value, icon }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={activeTab === value ? "text-nav font-bold font-poppins justify-start w-max-content px-0" : "w-max-content items-start text-nav-hover font-poppins justify-start px-0"}>
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
                                    {value === "table" && (
                                        <Card className="h-full w-full bg-lightest border-2 font-poppins">
                                            <EventTableHeaderOptions
                                                companyTags={props.companyTags}
                                                contentTags={props.contentTags}
                                            />

                                            <CardBody className="overflow-scroll px-0 p-0">
                                                <table className="mt-4 w-full min-w-max table-auto text-left">
                                                    <EventTableHeaders userId={auth.user.id} />

                                                   <EventTableBody
                                                       isBiiUser={auth.user.isBiiUser}
                                                       events={props.events}
                                                   />
                                                </table>
                                            </CardBody>

                                            <Pagination
                                                current={props.events.current_page}
                                                last={props.events.last_page}
                                                previousUrl={props.events.prev_page_url}
                                                nextUrl={props.events.next_page_url}
                                            />
                                        </Card>
                                    )}
                                </TabPanel>
                            ))}
                        </TabsBody>

                        <TabsBody className="-mt-4">
                            {data.map(({ value }) => (
                                <TabPanel key={value} value={value} className="px-0 py-0 h-full w-full bg-lightest border-2 font-poppins rounded-xl">
                                    {value === "calendar" && (
                                        <main className="">
                                            <div className="">
                                                <CalenderFull events={props.events} />
                                                {/*<section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">*/}
                                                {/*    <CalenderSm />*/}
                                                {/*</section>*/}
                                            </div>
                                        </main>
                                    )}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </FadeIn>
        </AuthenticatedLayout>
    )
}

export default Event