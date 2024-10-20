import {BuildingOffice2Icon, BuildingStorefrontIcon} from "@heroicons/react/24/outline/index.js";

export const networkButtonList = [
    {
        label: "BII companies",
        icon: BuildingStorefrontIcon,
        routeName: "communities.companies.index",
        route: route("communities.companies.index"),
        current: route().current("communities.companies.index"),
    },
    {
        label: "Resident companies",
        icon: BuildingOffice2Icon,
        routeName: "communities.companies.index",
        route: route("communities.residents.index"),
        current: route().current("communities.residents.index"),
    },
];
