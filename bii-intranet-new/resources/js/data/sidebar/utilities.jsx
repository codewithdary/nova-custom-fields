import {BuildingOfficeIcon, BookOpenIcon, CircleStackIcon, BellIcon} from "@heroicons/react/24/outline";

const utilities = (auth) =>  [
    {
        name: 'Room booking',
        href: '/booking',
        icon: BuildingOfficeIcon,
        current: window.location.pathname === '/booking',
        hasBadge: true
    },
    {
        name: 'Notifications',
        href: '/notifications',
        icon: BellIcon,
        current: window.location.pathname === '/notifications'
    },
    {
        name: 'Knowledgebase',
        href: '/knowledgebase',
        icon: BookOpenIcon,
        current: window.location.pathname === '/knowledgebase'
    },
    {
        name: 'File storage',
        href: '/storage',
        icon: CircleStackIcon,
        current: window.location.pathname === '/storage'
    },
];

export default utilities;