import {CircleStackIcon, ComputerDesktopIcon} from "@heroicons/react/24/outline";
import {BriefcaseIcon, BuildingStorefrontIcon} from "@heroicons/react/24/outline/index.js";

const navigation = (auth) =>  [
    {
        name: 'Programs',
        href: '/programs',
        icon: ComputerDesktopIcon,
        current: window.location.pathname === '/programs'
    },
    {
        name: 'Cohorts',
        href: '/cohorts',
        icon: BuildingStorefrontIcon,
        current: window.location.pathname === '/cohorts'
    },
    {
        name: 'Portfolios',
        href: '/portfolios',
        icon: BriefcaseIcon,
        current: window.location.pathname === '/portfolios'
    },
    {
        name: 'Collaborators',
        href: '/collaborators',
        icon: CircleStackIcon,
        current: window.location.pathname === '/collaborators'
    },
];

export default navigation;