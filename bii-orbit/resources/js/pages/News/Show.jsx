import { useTranslation } from "react-i18next";
import {SingleChip} from "../../helper/Text/SingleChip.jsx";
import { Author } from "../../components/News/Content/Author.jsx";
import { Container } from "../../components/Layout/Container.jsx";
import { ArrowLeftIconBlock } from "../../helper/Content/Arrow.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import DescriptionBlock from "../../components/Content/DescriptionBlock.jsx";

export default function Show({ ...props }) {
    const { t } = useTranslation();
    const { news, title } = props;

    return (
        <AuthenticatedLayout title={title}>
            <Container className="overflow-hidden pt-4">
                <NewsHeader
                    title={news.title}
                    humanDate={news.human_date}
                />

                <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
                    <NewsMeta
                        t={t}
                        news={news}
                    />

                    <NewsContent
                        t={t}
                        news={news}
                    />
                </div>
            </Container>
        </AuthenticatedLayout>
    );
}

function NewsHeader({ humanDate, title }) {
    return (
        <>
            <span className="text-xs/5 font-semibold uppercase tracking-widest text-paragraph">
                {humanDate}
            </span>

            <h1 className="mt-2 text-3xl font-bold tracking-tighter text-primary sm:text-6xl">
                {title}
            </h1>
        </>
    );
}

function NewsMeta({ news, t }) {
    return (
        <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            <Author
                alt={news.title}
                isBiiLogo={!news.creator}
                src={news.creator ? news.creator.full_avatar_path : '/images/logo/bii_logo_small.png'}
                text={news.created_by_id ? news.creator.full_name : t('bioinnovation_institute')}
            />

            {news.content_tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                    <SingleChip
                        rows={news.content_tags}
                    />
                </div>
            )}
        </div>
    );
}

function NewsContent({ t, news }) {
    return (
        <div>
            <div className="max-w-2xl xl:mx-auto">
                {news.full_image_path && (
                    <img
                        alt={news.title}
                        src={news.full_image_path}
                        className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                    />
                )}

                <DescriptionBlock
                    showDescription={true}
                    description={news.content}
                />

                <ArrowLeftIconBlock
                    route={route('home')}
                    text={t('back_home')}
                    className="mb-0 mt-10"
                />
            </div>
        </div>
    );
}
