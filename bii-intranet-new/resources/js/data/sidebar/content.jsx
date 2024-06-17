import {CalendarDaysIcon, NewspaperIcon} from "@heroicons/react/24/outline/index.js";

const content = (auth)=> [
    {
        name: 'News',
        href: '/news',
        icon: NewspaperIcon,
        current: /^\/news(\/create|\/\d+(\/edit)?)?$/.test(window.location.pathname)
    },
    {
        name: 'Events',
        href: '/events',
        icon: CalendarDaysIcon,
        current: /^\/events(\/create|\/bii|\/\d+(\/edit)?|\/user\/\d+)?$/.test(window.location.pathname),
        children: [
            { name: 'All events', href: '/events' },
            { name: 'Your events', href: '/events/user/' + auth.user.id },
            auth.user.isBiiUser && { name: 'BII events', href: '/events/bii' },
        ],
    },
]

export default content;