import '../../index.css';
import React from "react";
import {CalendarDaysIcon, ChevronDownIcon, EllipsisVerticalIcon, ListBulletIcon} from "@heroicons/react/16/solid";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import PageHeader from "../../components/Helper/PageHeader";
import {FadeIn} from "../../components/Helper/FadeIn";
import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Input, Menu, MenuHandler, MenuItem, MenuList, Popover, PopoverContent, PopoverHandler,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography
} from "@material-tailwind/react";
import CalenderFull from "../../components/Helper/CalenderFull";
import {
    ArrowLeftCircleIcon,
    ChevronUpDownIcon, EyeIcon,
    FunnelIcon,
    LinkIcon,
    MagnifyingGlassIcon, NewspaperIcon, PencilSquareIcon, TrashIcon, UserCircleIcon
} from "@heroicons/react/24/outline";
import {Pagination} from "../../components/Table/Paginaton";
import events from "../../data/events.json";
import {FilterDefault} from "../../components/Form/FilterDefault";
import {CalendarToolTip} from "../../components/Event/CalendarToolTip";
import {DownloadCloudIcon, DownloadIcon} from "lucide-react";
import {InlineWidget} from "react-calendly";

export const Event = () => {
    const [activeTab, setActiveTab] = React.useState("table");
    const headers = ["Date", "Title", "host", "signups", "status", ""];
    const navigation = [
        { name: 'View', href: '#', icon: EyeIcon, current: true },
        { name: 'Edit', href: '#', icon: PencilSquareIcon, current: false },
        { name: 'Delete', href: '#', icon: TrashIcon, current: false },
    ]

    const data = [
        {
            label: "Table",
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
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <PageHeader
                        header="Events overview"
                        subheader="Events"
                    />
                </div>

                <div className="float-right flex justify-end my-auto">
                    <a href="/events/create">
                        <ButtonDefault
                            variant="filled"
                            text="New event"
                        />
                    </a>
                </div>
            </div>

            <FadeIn key="/">
                <div className="pt-4 sm:pt-10 pb-4">
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-none bg-transparent p-0 w-52"
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
                                            <CardHeader
                                                floated={false}
                                                shadow={false}
                                                className="rounded-none bg-lightest">
                                                <div className="flex flex-col items-center justify-between gap-4 md:flex-row float-right">
                                                    <div className="w-full md:w-72">
                                                        <Input
                                                            className="bg-white"
                                                            label="Search"
                                                            icon={
                                                                <MagnifyingGlassIcon
                                                                    className="h-5 w-5"
                                                                />
                                                            }
                                                        />
                                                    </div>

                                                    <FilterDefault
                                                        isIcon={true}
                                                        type="events"
                                                        subheader="Narrow down your search and find specific events. Leave a filter blank if you don't need it."
                                                    />

                                                    <a href="">
                                                        <DownloadIcon
                                                            className="w-5 text-nav hover:text-nav-hover transition-all"
                                                        />
                                                    </a>
                                                </div>
                                            </CardHeader>

                                            <CardBody className="overflow-scroll px-0 p-0">
                                                <table className="mt-4 w-full min-w-max table-auto text-left">
                                                    <thead>
                                                    <tr>
                                                        {headers.map((head, index) => (
                                                            <th
                                                                key={head}
                                                                className="cursor-pointer border-y border-nav-hover bg-light p-4 transition-colors hover:bg-light">
                                                                <Typography
                                                                    variant="small"
                                                                    className="text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                                                                    {head}{" "}
                                                                    {index !== headers.length - 1 && (
                                                                        <ChevronUpDownIcon
                                                                            strokeWidth={2}
                                                                            className="h-4 w-4"
                                                                        />
                                                                    )}
                                                                </Typography>
                                                            </th>
                                                        ))}
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    {events.map(
                                                        ({ title, location, host, status, month, day, signups }, index) => {
                                                            const isLast = index === events.length - 1;
                                                            const classes = isLast
                                                                ? "p-4"
                                                                : "p-4 border-b border-blue-gray-50";
                                                            return (
                                                                <tr key={title}>

                                                                    <td className={classes}>
                                                                        <CalendarToolTip
                                                                            text="28 February 2024, 09:00 - 12:00"
                                                                            month={month}
                                                                            day={day}
                                                                        />
                                                                    </td>

                                                                    <td className={classes}>
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="flex flex-col">
                                                                                <Typography
                                                                                    variant="small"
                                                                                    className="font-poppins text-nav font-bold">
                                                                                    {title}
                                                                                </Typography>

                                                                                <Typography
                                                                                    variant="small"
                                                                                    className="font-poppins font-normal text-paragraph">
                                                                                    {location}
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td className={classes}>
                                                                        <div className="flex flex-col">
                                                                            <Typography
                                                                                className="font-poppins text-nav font-bold"
                                                                                variant="small">
                                                                                {host}
                                                                            </Typography>
                                                                        </div>
                                                                    </td>

                                                                    <td className={classes}>
                                                                        <a href="">
                                                                            <div className="flex items-center">
                                                                                <Typography variant="small" className="font-poppins text-nav font-bold pr-2">
                                                                                    {signups}
                                                                                </Typography>

                                                                                <LinkIcon
                                                                                    className="font-poppins text-nav font-bold pr-2 w-6"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </td>

                                                                    <td className={classes}>
                                                                        {status ? (
                                                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                                                <div className="flex-none rounded-full bg-green-500/20 p-1">
                                                                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                                                                </div>
                                                                                <p className="font-poppins text-nav font-bold">
                                                                                    Live
                                                                                </p>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                                                <div className="flex-none rounded-full bg-red-500/20 p-1">
                                                                                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                                                                </div>
                                                                                <p className="font-poppins text-nav font-bold">
                                                                                    Draft
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                    <td className={classes}>
                                                                        <Menu>
                                                                            <MenuHandler>
                                                                                <EllipsisVerticalIcon className="text-nav hover:text-nav-hover transition-all w-5" />
                                                                            </MenuHandler>

                                                                            <MenuList>
                                                                                {navigation.map((item) => (
                                                                                    <MenuItem className="flex items-center gap-2" key={item.name}>
                                                                                        <Typography variant="small" className="font-medium">
                                                                                            <a href={item.href}>
                                                                                                <item.icon
                                                                                                    className="text-nav hover:text-nav-hover transition-all w-5 inline"
                                                                                                />

                                                                                                <span className="pl-2">
                                                                                                    {item.name}
                                                                                                </span>
                                                                                            </a>
                                                                                        </Typography>
                                                                                    </MenuItem>
                                                                                ))}
                                                                            </MenuList>
                                                                        </Menu>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        },
                                                    )}
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                            <Pagination />
                                        </Card>
                                    )}
                                </TabPanel>
                            ))}
                        </TabsBody>

                        <TabsBody>
                            {data.map(({ value }) => (
                                <TabPanel key={value} value={value} className="px-0">
                                    {value === "calendar" && (
                                        <main className="w-full">
                                            {/*<InlineWidget url="https://calendly.com/your_scheduling_page" />*/}
                                        </main>
                                    )}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </FadeIn>
        </div>
    )
}