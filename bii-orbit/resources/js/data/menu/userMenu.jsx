import {ArrowLeftEndOnRectangleIcon, UserIcon} from "@heroicons/react/24/outline/index.js";

export function userMenu(user, t) {
    return [
        {
            name: t('my_profile'),
            href: route('profile.index'),
            condition: true,
            current: route().current('profile.index', user.id),
            icon: UserIcon,
        },
        {
            name: t('logout'),
            icon: ArrowLeftEndOnRectangleIcon,
            href: route('logout'),
            condition: true,
            formSubmit: true,
        }
    ];
}
