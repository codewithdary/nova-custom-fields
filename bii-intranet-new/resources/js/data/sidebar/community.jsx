import {UsersIcon, BuildingLibraryIcon, ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";

const community = (auth) =>  [
    {
        name: 'Users',
        href: '/users',
        icon: UsersIcon,
        current: /^\/users(\/users|\/\d+(\/users)?)?$/.test(window.location.pathname)
    },
    {
        name: 'Companies',
        href: '/companies',
        icon: BuildingLibraryIcon,
        current: window.location.pathname === '/companies',
    },
    {
        name: 'Discussions board',
        href: '/discussions',
        icon: ChatBubbleLeftRightIcon,
        current: /^\/community(\/community|\/\d+(\/community)?)?$/.test(window.location.pathname)
    },
];

export default community;