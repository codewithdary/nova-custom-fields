import React from "react";
import Search from "../Search/Search.jsx";
import {ResetFilter} from "./ResetFilter.jsx";
import {ButtonList} from "../Button/ButtonList.jsx";
import PaginateText from "../../helper/Text/PaginateText.jsx";

export const SearchAndPaginateFilter = ({ t, values, paginateText, params, name, id, placeholder, updateParams, clearRoute, searchRoute, refreshFilterButtonText,  refreshFilterButtonRoute, hasValues, buttons }) => {
    return (
        <>
            <div className="hidden sm:flex">
                {buttons && (
                    <ButtonList
                        buttons={buttons}
                    />
                )}
            </div>

            <Search
                t={t}
                id={id}
                name={name}
                values={values}
                params={params}
                route={searchRoute}
                clearRoute={clearRoute}
                placeholder={placeholder}
                updateParams={updateParams}
            />

            <div className="flex justify-between items-end">
                {clearRoute && (
                    <PaginateText
                        text={paginateText}
                    />
                )}

                {(hasValues(values) && refreshFilterButtonText) && (
                    <ResetFiltersLink
                        refreshFilterButtonText={refreshFilterButtonText}
                        refreshFilterButtonRoute={refreshFilterButtonRoute}
                    />
                )}
            </div>
        </>
    );
}

const ResetFiltersLink = ({ refreshFilterButtonRoute, refreshFilterButtonText }) => (
    <ResetFilter
        text={refreshFilterButtonText}
        resetFiltersUrl={refreshFilterButtonRoute}
    />
);
