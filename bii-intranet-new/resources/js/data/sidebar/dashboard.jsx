import {HomeIcon} from "@heroicons/react/24/outline/index.js";

const dashboard = (auth)=> [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
        current: window.location.pathname === '/dashboard'
    },
]

export default dashboard;