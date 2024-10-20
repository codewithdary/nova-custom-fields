import {useTranslation} from "react-i18next";
import NewsList from "../../components/News/List/NewsList.jsx";
import {updateParams} from "../../helper/Filter/FilterHelper.jsx";
import useInfiniteScroll from "../../helper/Content/InfiniteScroll.jsx";
import useNewsRequestForm from "../../components/Request/News/useNewsRequestForm.jsx";
import FilterContentLayout from "../../components/Layout/Filter/FilterContentLayout.jsx";

export default function Index({ ...props }) {
    const { t } = useTranslation();
    const { items, hasMore, fetchMoreData } = useInfiniteScroll(props.news.slice(0, 10), props.news);
    const {values, handleSubmit, setValues } = useNewsRequestForm(route('news.index'));

    return (
        <FilterContentLayout
            t={t}
            items={items}
            props={props}
            values={values}
            hasMore={hasMore}
            setValues={setValues}
            handleSubmit={handleSubmit}
            updateParams={updateParams}
            header={t('news_overview')}
            fetchMoreData={fetchMoreData}
            subheader={t("stay_updated")}
            itemsLength={props.news.length}
            searchRoute={route('news.index')}
            clearRoute={route('news.index')}
            refreshFilterButtonText={t('reset_filters')}
            refreshFilterButtonRoute={route('news.index')}
        >
            <NewsList
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
