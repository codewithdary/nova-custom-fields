import React from "react";
import {Head} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {PageLinks} from "../../components/Helper/PageLinks";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {CommaSeparatedString} from "../../components/Helper/CommaSeparatedString.jsx";

const NewsDetail = ({ title, article, related }) => {

    return (
        <AuthenticatedLayout>
            <Head title={title} />

            <div>
                <div className="mx-auto w-full sm:w-4/5">
                    <FadeIn>
                        <header className="mx-auto flex max-w-5xl flex-col text-center">
                            <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-primary-header sm:text-4xl w-4/5 mx-auto">
                                {article.is_published ? article.title : `DRAFT - ${article.title}`}
                            </h1>

                            <time
                                dateTime="article.created_at_human"
                                className="order-first text-sm text-primary-header">
                                {article.created_at_human}
                            </time>

                            <p className="mt-6 sm:mt-10 text-sm font-semibold text-primary-header">
                                {article.author ? (
                                    <>
                                        by <a target="_blank" href="#" className="underline">{article.author.full_name}</a>, {article.author.email}
                                    </>
                                ) : (
                                    <>
                                        by <a target="_blank" href="https://www.bii.dk" className="underline">BioInnovation Institute</a>, a Novo Nordisk Foundation Initiative
                                    </>
                                )}
                            </p>

                            {article.image_path && (
                                <img
                                    alt={"Banner image of " + article.title}
                                    className="w-full object-cover hover:grayscale-0 rounded-md sm:mt-10 mt-6 grayscale transition-all"
                                    src={article.image_path}
                                />
                            )}
                        </header>
                    </FadeIn>

                    <FadeIn>
                        <div
                            className="editor whitespace-pre-line sm:pt-10 pt-6 text-primary-header text-lg leading-9"
                            dangerouslySetInnerHTML={{__html: article.content}}>
                        </div>

                        <div className="text-white mt-6 text-left">
                            {article.content_tags.map((tag) => (
                                <span className="rounded-full bg-dark px-4 py-2 mb-2 text-white text-xs mr-3 inline-block">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                <div className="sm:w-4/5 w-full mx-auto">
                    {related.length > 0 && (
                        <PageLinks
                            title="More articles"
                            pages={related.slice(0, 2)}
                        />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default NewsDetail