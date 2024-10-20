import {useTranslation} from "react-i18next";
import {updateParams} from "../../../helper/Filter/FilterHelper.jsx";
import useInfiniteScroll from "../../../helper/Content/InfiniteScroll.jsx";
import FilterContentLayout from "../../../components/Layout/Filter/FilterContentLayout.jsx";
import {collaboratorFilterConfig} from "../../../config/Filter/collaboratorFilterConfig.jsx";
import CollaboratorList from "../../../components/Network/Collaborator/List/CollaboratorList.jsx";
import useCollaboratorRequestForm from "../../../components/Request/Network/useCollaboratorRequestForm.jsx";

export default function Index({ ...props }) {
    const { t } = useTranslation();
    const { items, hasMore, fetchMoreData } = useInfiniteScroll(props.collaborators.slice(0, 9), props.collaborators);
    const {values, handleSubmit, setValues } = useCollaboratorRequestForm(route('network.collaborators.index'));

    return (
        <FilterContentLayout
            t={t}
            items={items}
            props={props}
            values={values}
            hasMore={hasMore}
            setValues={setValues}
            subheader={t("network")}
            header={t('collaborators')}
            handleSubmit={handleSubmit}
            updateParams={updateParams}
            fetchMoreData={fetchMoreData}
            itemsLength={props.collaborators.length}
            filterConfig={collaboratorFilterConfig}
            refreshFilterButtonText={t('reset_filters')}
            clearRoute={route('network.collaborators.index')}
            searchRoute={route('network.collaborators.index')}
            refreshFilterButtonRoute={route('network.collaborators.index')}
        >
            <CollaboratorList
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
