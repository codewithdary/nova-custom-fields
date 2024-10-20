import {FadeIn} from "../../../helper/Content/FadeIn.jsx";
import AuthenticatedLayout from "../AuthenticatedLayout.jsx";
import FilterOptionRender from "../../Filter/FilterOptionRender.jsx";
import {SearchAndPaginateFilter} from "../../Filter/SearchAndPaginateFilter.jsx";
import {handleCheckboxChange, hasValues} from "../../../helper/Filter/FilterHelper.jsx";

export default function FilterContentLayout({ hasAdditionalExplanationButton = false, children, header, subheader, props, t,  values, handleSubmit, items, hasMore, fetchMoreData, updateParams, itemsLength, setValues, filterConfig, refreshFilterButtonRoute, refreshFilterButtonText, searchRoute, clearRoute, buttons }) {
    return (
        <AuthenticatedLayout
            header={header}
            title={props.title}
            subheader={subheader}
            hasAdditionalExplanationButton={hasAdditionalExplanationButton}
        >
            <div className={`block ${filterConfig ? 'sm:flex flex-row items-start gap-5' : ''}`}>
                {filterConfig && (
                    <FilterSection
                        t={t}
                        props={props}
                        values={values}
                        setValues={setValues}
                        filterConfig={filterConfig}
                        handleSubmit={handleSubmit}
                        refreshFilterButtonText={refreshFilterButtonText}
                        refreshFilterButtonRoute={refreshFilterButtonRoute}
                        handleCheckboxChange={(id, isChecked, type) => handleCheckboxChange(id, isChecked, type, setValues)}
                    />
                )}

                <SearchAndRenderList
                    t={t}
                    items={items}
                    params={values}
                    values={values}
                    hasMore={hasMore}
                    buttons={buttons}
                    children={children}
                    clearRoute={clearRoute}
                    newsLength={itemsLength}
                    searchRoute={searchRoute}
                    updateParams={updateParams}
                    filterConfig={filterConfig}
                    fetchMoreData={fetchMoreData}
                    refreshFilterButtonText={refreshFilterButtonText}
                    refreshFilterButtonRoute={refreshFilterButtonRoute}
                />
            </div>
        </AuthenticatedLayout>
    );
}

const FilterSection = ({ values, setValues, props, handleCheckboxChange, handleSubmit, t, filterConfig, refreshFilterButtonRoute, refreshFilterButtonText }) => (
    <FilterOptionRender
        t={t}
        props={props}
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
        filterConfig={filterConfig}
        handleCheckboxChange={handleCheckboxChange}
        refreshFilterButtonText={refreshFilterButtonText}
        refreshFilterButtonRoute={refreshFilterButtonRoute}
    />
);

const SearchAndRenderList = ({ t, items, values, newsLength, params, updateParams, refreshFilterButtonText, refreshFilterButtonRoute, searchRoute, clearRoute, children, buttons, filterConfig }) => (
    <div className={`${filterConfig ? 'sm:w-4/5 lg:w-[1000px]' : ''}`}>
        <FadeIn>
            <SearchAndPaginateFilter
                t={t}
                values={values}
                params={params}
                buttons={buttons}
                name={t('search')}
                hasValues={hasValues}
                id={t('search_input')}
                clearRoute={clearRoute}
                searchRoute={searchRoute}
                updateParams={updateParams}
                placeholder={t('keyword')}
                refreshFilterButtonText={refreshFilterButtonText}
                refreshFilterButtonRoute={refreshFilterButtonRoute}
                paginateText={t('paginated', { to: items.length, total: newsLength })}
            />
            {children}
        </FadeIn>
    </div>
);
