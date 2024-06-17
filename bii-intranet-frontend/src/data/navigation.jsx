import {
    BookOpenIcon,
    BuildingLibraryIcon,
    CircleStackIcon,
    ComputerDesktopIcon,
    PencilSquareIcon
} from "@heroicons/react/16/solid";
import {CalendarIcon, NewspaperIcon, UsersIcon} from "@heroicons/react/24/outline";

const navigation = [
    {
        name: 'Dashboard',
        href: '/',
        icon: ComputerDesktopIcon,
        current: window.location.pathname === '/'
    },
    {
        name: 'News',
        href: '/news',
        icon: NewspaperIcon,
        current: window.location.pathname === '/news'
    },
    {
        name: 'Events',
        href: '/events',
        icon: CalendarIcon,
        current: window.location.pathname === '/events'
    },
    {
        name: 'Discussions',
        href: '/discussions',
        icon: PencilSquareIcon,
        current: window.location.pathname === '/discussions'
    },
    {
        name: 'Collaborators',
        href: '/collaborators',
        icon: ComputerDesktopIcon,
        current: window.location.pathname === '/collaborators'
    },
    {
        name: 'Knowledgebase',
        href: '/knowledgebase',
        icon: BookOpenIcon,
        current: window.location.pathname === '/knowledgebase'
    },
    {
        name: 'Companies',
        href: '/companies',
        icon: BuildingLibraryIcon,
        current: window.location.pathname === '/companies',
        children: [
            { name: 'Companies', href: '#' },
            { name: 'Programs', href: '#' },
            { name: 'Cohorts', href: '#' },
        ],
    },
    {
        name: 'Community',
        href: '/community',
        icon: UsersIcon,
        current: window.location.pathname === '/community'
    },
    {
        name: 'File storage',
        href: '/storage',
        icon: CircleStackIcon,
        current: window.location.pathname === '/storage'
    },
];

export default navigation;