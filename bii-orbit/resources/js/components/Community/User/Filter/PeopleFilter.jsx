import React from "react";
import FilterFormLayout from "../../../Layout/Filter/FilterFormLayout.jsx";
import {newsFilterConfig} from "../../../../config/Filter/newsFilterConfig.jsx";

export default function PeopleFilter({ values, handleSubmit, handleCheckboxChange, skills, t }) {
    return (
        <FilterFormLayout
            handleSubmit={handleSubmit}
            buttonText={t('refresh_filter')}
            buttonRoute={route('news.index')}
        >
            {newsFilterConfig(values, t, handleCheckboxChange, skills).map((block, index) => {
                const { key, ...blockProps } = block.props;
                const Component = block.component;

                return (
                    <Component key={index} {...blockProps}>
                        {block.children && block.children.map((child, childIndex) => {
                            const { key: childKey, ...childProps } = child.props;
                            const ChildComponent = child.component;

                            return (
                                <ChildComponent
                                    key={childIndex}
                                    {...childProps}
                                />
                            );
                        })}
                    </Component>
                );
            })}
        </FilterFormLayout>
    );
}
