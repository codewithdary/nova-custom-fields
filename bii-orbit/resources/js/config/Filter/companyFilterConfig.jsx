import CheckboxFilterDefault from "../../components/Field/CheckboxFilterDefault.jsx";
import FilterBlockLayout from "../../components/Layout/Filter/FilterBlockLayout.jsx";
import {toggleIsOnSight, toggleLatestJoined} from "../../helper/Form/ToggleFilterHelper.jsx";

export const companyFilterConfig = (values, setValues, t, handleCheckboxChange, props) => [
    {
        component: FilterBlockLayout,
        props: { title: t('filters') },
        children: [
            {
                component: CheckboxFilterDefault,
                props: {
                    id: "isLatestJoined",
                    key: "isLatestJoined",
                    isSingleCheckbox: true,
                    checked: values.isLatestJoined,
                    header: t('latest_added_companies'),
                    handleSingleCheckboxChange: () => toggleLatestJoined(setValues),
                },
            },
            {
                component: CheckboxFilterDefault,
                props: {
                    id: "isOnSite",
                    key: "isOnSite",
                    isSingleCheckbox: true,
                    checked: values.isOnSite,
                    header: t('is_on_site_at_bii'),
                    handleSingleCheckboxChange: () => toggleIsOnSight(setValues),

                },
            },
        ],
    },
    {
        component: FilterBlockLayout,
        props: { title: t('bii_areas'), classNames: "pt-5"},
        children: props.categories.map((category) => ({
            component: CheckboxFilterDefault,
            props: {
                id: category.name,
                key: category.name,
                header: category.name,
                children: category.children,
                selectedIds: values.categories,
                handleCheckboxChange: (id, isChecked) => handleCheckboxChange(id, isChecked, 'categories'),
            },
        })),
    },
    {
        component: FilterBlockLayout,
        props: { title: t('bii_program_and_cohort'), classNames: "pt-5"},
        children: props.cohorts.map((cohort) => ({
            component: CheckboxFilterDefault,
            props: {
                id: cohort.name,
                key: cohort.name,
                header: cohort.name,
                children: cohort.children,
                selectedIds: values.cohorts,
                handleCheckboxChange: (id, isChecked) => handleCheckboxChange(id, isChecked, 'cohorts'),
            },
        })),
    },
    {
        component: FilterBlockLayout,
        props: { title: t('impacts'), classNames: "pt-5 border-none"},
        children: props.impacts.map((impact) => ({
            component: CheckboxFilterDefault,
            props: {
                id: impact.name,
                key: impact.name,
                header: impact.name,
                children: impact.children,
                selectedIds: values.impacts,
                handleCheckboxChange: (id, isChecked) => handleCheckboxChange(id, isChecked, 'impacts'),
            },
        })),
    },
];
