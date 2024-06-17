import {Head} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {TabPanel, TabsBody, Card, CardBody, Tab, TabsHeader, Tabs, Button, Dialog} from "@material-tailwind/react";
import PageHeader from "../../components/Helper/PageHeader.jsx";
import {
    ListBulletIcon,
    BarsArrowDownIcon,
    CheckIcon
} from "@heroicons/react/16/solid";
import StorageButton from "../../components/Storage/StorageButton.jsx";
import {FolderIcon, DocumentDuplicateIcon, ShareIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";
import PdfViewerComponent from "../../components/Storage/Viewer/PdfViewerComponent.jsx";


const Storage = ({title}) => {
    const [open, setOpen] = React.useState(false);

    const [activeTab, setActiveTab] = React.useState("table");

    const data = [
        {
            label: "List layout",
            value: "table",
            icon: ListBulletIcon,
        },
        {
            label: "Grid layout",
            value: "grid",
            icon: BarsArrowDownIcon,
        },
        {
            label: "Shared files",
            value: "shared",
            icon: ShareIcon,
        },
        {
            label: "Approved",
            value: "approved",
            icon: CheckIcon,
        },
        {
            label: "Deleted",
            value: "deleted",
            icon: TrashIcon,
        },
    ];

    const handleOpen = () => setOpen(!open);

    return(
        <AuthenticatedLayout>
            <div className="PDF-viewer">
                <Button onClick={handleOpen} variant="gradient">
                    Open Dialog
                </Button>
                <Dialog open={open} handler={handleOpen} className="w-full">
                    <PdfViewerComponent
                        document={"functions.docx"}
                    />
                </Dialog>
            </div>
        </AuthenticatedLayout>


    );
}

export default Storage;