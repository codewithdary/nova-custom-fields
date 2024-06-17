import {
    Menu,
    Button,
    MenuHandler,
    MenuList,
    MenuItem, Typography,
} from "@material-tailwind/react";
import {FolderIcon} from "@heroicons/react/24/outline/index.js";

const StorageButton = ({icon, text}) => {
    return(
        <Button className="flex items-center gap-3 font-md py-4 bg-dark normal-case">
            {icon}

            {text}
        </Button>
    );
}

export default StorageButton;