import React from "react";
import FilterFormLayout from "../Layout/Filter/FilterFormLayout.jsx";

export default function FilterOptionRender({ values, setValues, handleSubmit, handleCheckboxChange, props, t, filterConfig, refreshFilterButtonRoute, refreshFilterButtonText }) {
    return (
        <FilterFormLayout
            handleSubmit={handleSubmit}
            buttonText={refreshFilterButtonText}
            buttonRoute={refreshFilterButtonRoute}
        >
            {filterConfig(values, setValues, t, handleCheckboxChange, props).map((block, index) => {
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
