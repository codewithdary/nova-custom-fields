import {useTranslation} from "react-i18next";
import NewsBlock from "../../components/News/List/NewsBlock.jsx";
import EventList from "../../components/Event/List/EventList.jsx";
import LatestNewsBlock from "../../components/News/Content/LatestNewsBlock.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";

export default function Index({ ...props }) {
    const { t } = useTranslation();

    return (
        <>
            <AuthenticatedLayout title={props.title}>
                <div className="flex flex-col lg:flex-row items-start gap-5 mx-auto">
                    <div className="w-full">
                        <LatestNewsBlock
                            t={t}
                            news={props.latestNews}
                        />

                        <NewsBlock
                            t={t}
                            news={props.latestThreeNews}
                        />
                    </div>

                    <div className="w-full lg:w-[700px] xl:w-[700px]">
                        <EventList
                            t={t}
                            events={props.events}
                            title={t('upcoming_events')}
                            unavailableMessage={t('unavailable_events')}
                        />
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
