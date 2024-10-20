import {ChipSearchFilter} from "../../components/Filter/Option/ChipSearchFilter.jsx";

export const filterSearchConfig = (t, params, updateParams) => [
    {
        component: ChipSearchFilter,
        props: {
            params,
            filterType: "categories",
            items: params.categories,
            updateParams,
        },
    },
];
