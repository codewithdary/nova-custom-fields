import React from 'react';
import {Head} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import StripContent from "../../Helper/StripContent.jsx"
import {Pagination} from "../../components/Table/Paginaton.jsx";
import PageHeader from "../../components/Helper/PageHeader.jsx";
import {ButtonDefault} from "../../components/Form/ButtonDefault.jsx";
import {FilterDefault} from "../../components/Form/FilterDefault.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {NewsDropdownMenu} from "../../components/News/NewsDropdownMenu.jsx";

const News = ({auth, ...props }) => {
    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <div className="border-b-2 border-gray-100">
                <div className="grid grid-cols-2 border-b-2 border-border-color">
                    <div>
                        <PageHeader
                            header="News overview"
                            subheader="News"
                        />
                    </div>

                    {auth.user.isBiiUser && (
                        <div className="float-right flex justify-end my-auto">
                            <a href={props.createUrl}>
                                <ButtonDefault
                                    variant="filled"
                                    text="New news"
                                />
                            </a>
                        </div>
                    )}
                </div>

                <div className="flex justify-end pt-0 sm:pt-6">
                    <FilterDefault
                        options={props.contentTags}
                        visibilities={props.visibilities}
                        type="news"
                        subheader="Narrow down your search and find specific news. Leave a filter blank if you don't need it."
                    />
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-none pt-4">
                    <div className="space-y-24 lg:space-y-32">
                        {props.articles.data.map((article) => (
                            <FadeIn key={article.id}>
                                <article key={article.id}>
                                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                        <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                            <h2 className="font-display text-xl text-primary-header font-extrabold pb-2">
                                                {article.is_published ? article.title : `DRAFT - ${article.title}`}
                                            </h2>

                                            <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                                <dd className="absolute left-0 top-0 text-sm text-paragraph lg:static">
                                                    <time dateTime={article.created_at_human}>
                                                        {article.created_at_human}
                                                    </time>
                                                </dd>

                                                {article.author ? (
                                                    <dd className="mt-6 flex gap-x-4">
                                                        <div className="flex-none overflow-hidden rounded-xl">
                                                            <img
                                                                alt={"Avatar of " + article.author.full_name}
                                                                src={article.author.avatar_path}
                                                                className="h-12 w-12 object-cover"
                                                            />
                                                        </div>

                                                        <div className="text-sm text-primary-header">
                                                            <div className="font-semibold">
                                                                {article.author.full_name}
                                                            </div>

                                                            <div className="text-paragraph">
                                                                {article.author.email}
                                                            </div>
                                                        </div>
                                                    </dd>
                                                ) : (
                                                    <dd className="mt-6 flex gap-x-4">
                                                        <div className="flex-none overflow-hidden rounded-xl">
                                                            <img
                                                                alt="Avatar of BioInnovation Institute"
                                                                src="/images/logo/bii-logo-small.png"
                                                                className="h-12 w-12 object-cover"
                                                            />
                                                        </div>

                                                        <div className="text-sm text-primary-header">
                                                            <div className="font-semibold">
                                                                BioInnovation Institute
                                                            </div>

                                                            <div className="text-paragraph">
                                                                info@bii.dk
                                                            </div>
                                                        </div>
                                                    </dd>
                                                )}
                                            </dl>

                                            <p className="mt-6 mb-8 max-w-2xl text-paragraph">
                                                <StripContent
                                                    slice={40}
                                                    content={article.content}
                                                />
                                                ...
                                            </p>

                                            <a href={'/news/' + article.id}>
                                                <ButtonDefault
                                                    text="Read more">
                                                </ButtonDefault>
                                            </a>
                                        </div>

                                        {auth.user.isBiiUser && (
                                            <div className="pt-4 sm:pt-0">
                                                <NewsDropdownMenu
                                                    id={article.id}
                                                    title={article.title}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Pagination
                            current={props.articles.current_page}
                            last={props.articles.last_page}
                            previousUrl={props.articles.prev_page_url}
                            nextUrl={props.articles.next_page_url}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default News