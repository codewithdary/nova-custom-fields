import {NewspaperIcon, PencilSquareIcon, UserCircleIcon} from "@heroicons/react/24/outline/index.js";

const profile = [
    {
        name: 'My profile',
        href: '/profile',
        icon: UserCircleIcon,
        current: window.location.pathname === '/profile'
    },
    {
        name: 'Release notes',
        href: '/release-notes',
        icon: PencilSquareIcon,
        current: window.location.pathname === '/release-notes'
    },
    {
        name: 'Documentation',
        href: 'https://docs.bii-intranet.dk/',
        icon: NewspaperIcon,
        current: false
    },
]

export default profile