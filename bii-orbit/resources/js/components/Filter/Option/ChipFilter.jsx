import React from "react";
import {filterSearchConfig} from "../../../config/Filter/filterSearchConfig.jsx";

export const ChipFilter = ({ t, params, updateParams }) => {
    return (
        <>
            {filterSearchConfig(t, params, updateParams).map((field, index) => {
                const Component = field.component;
                return (
                    <Component
                        key={index}
                        {...field.props}
                    />
                );
            })}
        </>
    );
};
