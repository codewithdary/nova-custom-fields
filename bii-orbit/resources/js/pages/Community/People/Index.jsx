import {useTranslation} from "react-i18next";
import {updateParams} from "../../../helper/Filter/FilterHelper.jsx";
import useInfiniteScroll from "../../../helper/Content/InfiniteScroll.jsx";
import PeopleList from "../../../components/Community/User/Block/PeopleList.jsx";
import {peopleFilterConfig} from "../../../config/Filter/peopleFilterConfig.jsx";
import FilterContentLayout from "../../../components/Layout/Filter/FilterContentLayout.jsx";
import usePeopleRequestForm from "../../../components/Request/Network/usePeopleRequestForm.jsx";

export default function Index({ ...props }) {
    const { t } = useTranslation();
    const { items, hasMore, fetchMoreData } = useInfiniteScroll(props.users.slice(0, 9), props.users);
    const {values, handleSubmit, setValues } = usePeopleRequestForm(route('communities.people.index'));

    return (
        <FilterContentLayout
            t={t}
            items={items}
            props={props}
            values={values}
            hasMore={hasMore}
            header={t('people')}
            setValues={setValues}
            subheader={t("community")}
            handleSubmit={handleSubmit}
            updateParams={updateParams}
            fetchMoreData={fetchMoreData}
            itemsLength={props.users.length}
            filterConfig={peopleFilterConfig}
            refreshFilterButtonText={t('reset_filters')}
            clearRoute={route('communities.people.index')}
            searchRoute={route('communities.people.index')}
            refreshFilterButtonRoute={route('communities.people.index')}
        >
            <PeopleList
                t={t}
                items={items}
                hasMore={hasMore}
                next={fetchMoreData}
                endpoint="news.show"
                dataLength={items.length}
                loadingText={t('loading')}
                style={{ overflow: 'unset' }}
                loader={<h2>{t('loading')}</h2>}
                noResultsText={t('portfolio_no_results')}
            />
        </FilterContentLayout>
    );
}
