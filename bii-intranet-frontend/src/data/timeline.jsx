import {CheckIcon, HandThumbUpIcon, UserIcon} from "@heroicons/react/16/solid";
import handThumbUpIcon from "@heroicons/react/16/solid/HandThumbUpIcon";
import {MessageSquareWarningIcon} from "lucide-react";

const timeline = [
    {
        id: 1,
        content: 'Joined event',
        target: 'this is my first event',
        href: '#',
        date: 'Feb 02',
        datetime: '2024-02-20',
        icon: UserIcon,
        iconBackground: 'bg-nav-hover',
    },
    {
        id: 2,
        content: 'How should we migrate by',
        target: 'Code with Dary',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: handThumbUpIcon,
        iconBackground: 'bg-primary-header',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: MessageSquareWarningIcon,
        iconBackground: 'bg-warning',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]

export default timeline;