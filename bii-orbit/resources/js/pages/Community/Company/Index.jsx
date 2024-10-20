import {useTranslation} from "react-i18next";
import {updateParams} from "../../../helper/Filter/FilterHelper.jsx";
import useInfiniteScroll from "../../../helper/Content/InfiniteScroll.jsx";
import {networkButtonList} from "../../../data/button/networkButtonList.jsx";
import {companyFilterConfig} from "../../../config/Filter/companyFilterConfig.jsx";
import CompanyList from "../../../components/Community/Company/List/CompanyList.jsx";
import FilterContentLayout from "../../../components/Layout/Filter/FilterContentLayout.jsx";
import useCompanyRequestForm from "../../../components/Request/Network/useCommpanyRequestForm.jsx";

export default function Index({ ...props }) {
    const isResidenceEndPoint = route().current('communities.residents.index')
    const residentRoute = isResidenceEndPoint ? route('communities.residents.index') : route('communities.companies.index')
    const { t } = useTranslation();
    const { items, hasMore, fetchMoreData } = useInfiniteScroll(props.companies.slice(0, 10), props.companies);
    const {values, handleSubmit, setValues } = useCompanyRequestForm(residentRoute);

    return (
        <FilterContentLayout
            t={t}
            items={items}
            props={props}
            values={values}
            hasMore={hasMore}
            setValues={setValues}
            subheader={t("community")}
            updateParams={updateParams}
            handleSubmit={handleSubmit}
            buttons={networkButtonList}
            clearRoute={residentRoute}
            searchRoute={residentRoute}
            fetchMoreData={fetchMoreData}
            filterConfig={companyFilterConfig}
            itemsLength={props.companies.length}
            refreshFilterButtonRoute={residentRoute}
            refreshFilterButtonText={t('reset_filters')}
            header={isResidenceEndPoint ? t('resident_companies') : t('companies')}
        >
            <CompanyList
                t={t}
                items={items}
                hasMore={hasMore}
                next={fetchMoreData}
                dataLength={items.length}
                loadingText={t('loading')}
                style={{ overflow: 'unset' }}
                loader={<h2>{t('loading')}</h2>}
                noResultsText={t('portfolio_no_results')}
            />
        </FilterContentLayout>
    );
}
