import CheckboxFilterDefault from "../../components/Field/CheckboxFilterDefault.jsx";
import FilterBlockLayout from "../../components/Layout/Filter/FilterBlockLayout.jsx";
import {toggleLatestJoined} from "../../helper/Form/ToggleFilterHelper.jsx";

export const peopleFilterConfig = (values, setValues, t, handleCheckboxChange, props) => [
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
                    header: t('latest_people_joined'),
                    handleSingleCheckboxChange: () => toggleLatestJoined(setValues),
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
        props: { title: t('experience'), classNames: "pt-5 border-none"},
        children: props.kths.map((kth) => ({
            component: CheckboxFilterDefault,
            props: {
                id: kth.name,
                key: kth.name,
                header: kth.name,
                children: kth.children,
                selectedIds: values.kths,
                handleCheckboxChange: (id, isChecked) => handleCheckboxChange(id, isChecked, 'kths'),
            },
        })),
    },
];
