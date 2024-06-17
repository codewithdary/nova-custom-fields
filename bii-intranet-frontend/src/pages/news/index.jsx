import '../../index.css';
import news from "../../data/news.json"
import {FadeIn} from "../../components/Helper/FadeIn";
import PageHeader from "../../components/Helper/PageHeader";
import React from "react";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import {FilterDefault} from "../../components/Form/FilterDefault";

export const News = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <PageHeader
                        header="News overview"
                        subheader="News"
                    />
                </div>

                <div className="float-right flex justify-end my-auto">
                    <a href="/news/create">
                        <ButtonDefault
                            variant="filled"
                            text="New news"
                        />
                    </a>
                </div>
            </div>

            <div className="flex justify-end pt-0 sm:pt-6">
                <FilterDefault
                    type="news"
                    subheader="Narrow down your search and find specific news. Leave a filter blank if you don't need it."
                />
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-none pt-4">
                <div className="space-y-24 lg:space-y-32">
                    {news.map((article) => (
                        <FadeIn key="/">
                            <article>
                                <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                        <h2 className="font-display text-xl text-primary-header font-extrabold pb-2">
                                            {article.title}
                                        </h2>

                                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                            <dt className="sr-only">
                                                {article.status}
                                            </dt>

                                            <dd className="absolute left-0 top-0 text-sm text-paragraph lg:static">
                                                <time dateTime={article.date}>
                                                    {article.date}
                                                </time>
                                            </dd>

                                            <dt className="sr-only">
                                                Author
                                            </dt>

                                            <dd className="mt-6 flex gap-x-4">
                                                <div className="flex-none overflow-hidden rounded-xl">
                                                    <img
                                                        alt=""
                                                        src="https://yt3.googleusercontent.com/-WCYFhpqKRyPbs9-ernsouHzls8ZX1rxA5g3pt4eVxgF-qHGZcQyjKmuNxxv91imrhwk-KXdohA=s176-c-k-c0x00ffffff-no-rj"
                                                        className="h-12 w-12 object-cover"
                                                    />
                                                </div>

                                                <div className="text-sm text-primary-header">
                                                    <div className="font-semibold">
                                                        {article.name}
                                                    </div>
                                                    <div className="text-paragraph">
                                                        {article.role}
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>

                                        <p className="mt-6 mb-8 max-w-2xl text-paragraph">
                                            {article.description}
                                        </p>

                                        <a href="/news/first-post">
                                            <ButtonDefault
                                                text="Read more">
                                            </ButtonDefault>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    )
}
