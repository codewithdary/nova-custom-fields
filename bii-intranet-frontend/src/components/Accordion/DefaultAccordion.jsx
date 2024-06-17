import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} className="pt-6">
                <AccordionHeader
                    className="text-nav font-extrabold font-poppins"
                    onClick={() => handleOpen(1)}>
                    Sprint BII2023-12 (22 Jan - 12 Feb)
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal text-base">
                    - Former Employee Functionality - BII-131 <br/>
                    - Update Table of File Sharing - BII-141  <br/>
                    - Add Search Functionality to File Sharing - BII-142  <br/>
                    - Add BII Documentation - BII-143 <br/>
                    - Delete Users Who Are Not Onboarded After a Month - BII-140 <br/>
                    - Implement Multiple Share File Upload Feature for BII Anchor - BII-145 <br/>
                    - Optimizing File Sharing File Extension - BII-134 <br/>
                    - Add New Column to Users Table for Named Group - BII-144 <br/>
                    - Separate Routes into Individual Files - BII-136 <br/>
                    - Optimize Owner Feature When Creating New Files / Folders - BII-137 <br/>
                    - Hiding 'With Trashed' Option in Backend File/Folder Creation - BII-138 <br/>
                    - Show Actual File Name in Backend - BII-139 <br/>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    Sprint BII2023-11 (01 Jan - 22 Feb)
                </AccordionHeader>
                <AccordionBody className="font-poppins text-base">
                    - Former Employee Functionality - BII-131 <br/>
                    - Update Table of File Sharing - BII-141  <br/>
                    - Add Search Functionality to File Sharing - BII-142  <br/>
                    - Add BII Documentation - BII-143 <br/>
                    - Delete Users Who Are Not Onboarded After a Month - BII-140 <br/>
                    - Implement Multiple Share File Upload Feature for BII Anchor - BII-145 <br/>
                    - Optimizing File Sharing File Extension - BII-134 <br/>
                    - Add New Column to Users Table for Named Group - BII-144 <br/>
                    - Separate Routes into Individual Files - BII-136 <br/>
                    - Optimize Owner Feature When Creating New Files / Folders - BII-137 <br/>
                    - Hiding 'With Trashed' Option in Backend File/Folder Creation - BII-138 <br/>
                    - Show Actual File Name in Backend - BII-139 <br/>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    Sprint BII2023-10 (01 Dec - 31 Dec)
                </AccordionHeader>
                <AccordionBody className="font-poppins text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    Sprint BII2023-10 (01 Dec - 31 Dec)
                </AccordionHeader>
                <AccordionBody className="font-poppins text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    Sprint BII2023-10 (01 Dec - 31 Dec)
                </AccordionHeader>
                <AccordionBody className="font-poppins text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
}