import clsx from "clsx";
import React, {useId} from "react";
import {Head} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import PageHeader from "../../components/Helper/PageHeader";
import {Pagination} from "../../components/Table/Paginaton.jsx";
import {FilterDefault} from "../../components/Form/FilterDefault";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";

function ImageClipPaths({ id, ...props }) {
    return (
        <svg aria-hidden="true" width={0} height={0} {...props}>
            <defs>
                <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
                    <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
                </clipPath>
                <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
                    <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
                </clipPath>
                <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
                    <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default function Community({ ...props }) {
    let id = useId()

    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <section id="users" aria-labelledby="speakers-title">
                <ImageClipPaths
                    id={id}
                />

                <div className="border-b-2 border-border-color">
                    <PageHeader
                        header="Users"
                        subheader="Community"
                    />
                </div>

                <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0 pt-6">
                    <div className="flex justify-end">
                        <FilterDefault
                            companies={props.companies}
                            skills={props.skills}
                            type="user"
                            subheader="Narrow down your search and find specific news. Leave a filter blank if you don't need it."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    {props.users.data.map((user, userIndex) => (
                        <FadeIn>
                            <a href={'/users/' + user.id}>
                                <div key={userIndex}>
                                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                                        <div
                                            className={clsx(
                                                'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border rounded-lg transition duration-300 group-hover:scale-95 xl:right-6',
                                                [
                                                    'border-nav-hover',
                                                    'border-nav-hover',
                                                    'border-nav-hover',
                                                ][userIndex % 3],
                                            )}
                                        />

                                        <div className="absolute inset-0 rounded-lg bg-indigo-50" style={{ clipPath: `url(#${id}-${userIndex % 3})` }}>
                                            <img
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105 rounded-lg hover:grayscale"
                                                src={user.avatar_path}
                                                alt={"Avatar of " + user.firstname}
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-primary-header">
                                        {user.full_name ? user.full_name : user.firstname}
                                    </h3>

                                    <p className="mt-1 text-base tracking-tight text-nav">
                                        {user.email}
                                    </p>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-10">
                    <Pagination
                        current={props.users.current_page}
                        last={props.users.last_page}
                        previousUrl={props.users.prev_page_url}
                        nextUrl={props.users.next_page_url}
                    />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}