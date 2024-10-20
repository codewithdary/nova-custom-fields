import {LuUsers} from "react-icons/lu";
import {PiNetwork} from "react-icons/pi";
import {TbTransactionEuro} from "react-icons/tb";
import {BuildingStorefrontIcon, ChartPieIcon} from "@heroicons/react/24/outline/index.js";

export function createMenu({ auth, t }) {
    return [
        {
            name: t('my_bii_program'),
            href: route('venture-program.index'),
            current: route().current('venture-program.index'),
            condition: true,
            icon: ChartPieIcon,
            target: "_self"
        },
        {
            name: t('community'),
            href: null,
            current: route().current('communities.*'),
            condition: true,
            icon: LuUsers,
            children: [
                {
                    name: t('companies'),
                    href: route('communities.companies.index'),
                    current: route().current('communities.companies.*'),
                    condition: true,
                    target: "_self"
                },
                {
                    name: t('people'),
                    href: route('communities.people.index'),
                    current: route().current('communities.people.*'),
                    condition: true,
                    target: "_self"
                },
            ]
        },
        {
            name: t('network'),
            href: null,
            current: route().current('network.*'),
            condition: true,
            icon: PiNetwork,
            children: [
                {
                    name: t('collaborators'),
                    href: route('network.collaborators.index'),
                    current: route().current('network.collaborators.*'),
                    condition: true,
                    target: "_self"
                },
                {
                    name: t('advisor_network'),
                    href: route('network.advisors.index'),
                    current: route().current('network.advisors.*'),
                    condition: true,
                    target: "_self"
                },
                {
                    name: t('board_network'),
                    href: route('network.board.index'),
                    current: route().current('network.board.*'),
                    condition: true,
                    target: "_self"
                },
            ]
        },
        {
            name: t('investor_platform'),
            href: t('investor_network_url'),
            current: false,
            condition: true,
            icon: TbTransactionEuro,
            target: "_blank"
        },
        {
            name: t('facility'),
            href: route('facilities.index'),
            current: route().current('facilities.index'),
            condition: true,
            icon: BuildingStorefrontIcon,
            target: "_self"
        },
    ];
}
