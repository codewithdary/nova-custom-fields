import React from "react";
import {Head} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {TagRow} from "../../components/View/TagRow.jsx";
import {DetailRow} from "../../components/View/DetailRow.jsx";
import {AvatarRow} from "../../components/View/AvatarRow.jsx";
import {CompanyRow} from "../../components/View/CompanyRow.jsx";
import PageHeader from "../../components/Helper/PageHeader.jsx";
import {DeleteModal} from "../../components/Modal/DeleteModal.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {HeaderRow} from "../../components/View/HeaderRow.jsx";

export default function CommunityDetail({ auth, title, user }) {
    return (
        <AuthenticatedLayout>
            <Head title={title} />

            <article>
                <header>
                    <div>
                        <div className="grid grid-cols-2 border-b-2 border-border-color">
                            <div>
                                <PageHeader
                                    header={user.full_name}
                                    subheader="Community"
                                />
                            </div>

                            {auth.user.isBiiUser && (
                                <div className="float-right flex justify-end my-auto">
                                    <DeleteModal
                                        id={user.id}
                                        url="/users/"
                                        bodyText={"You are about to delete '" + user.full_name + "'. Are you sure that you want to do this?"}
                                        buttonText="Delete"
                                        headerText="Are you certain you want to delete this user?"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                        <FadeIn>
                            <div className="block sm:flex flex-row items-start gap-8 pt-6">
                                <div className="sm:w-7/12">
                                    <div className="bg-white rounded-md shadow-xl">
                                        <HeaderRow
                                            title="General details"
                                        />

                                        {user.avatar_path && (
                                            <AvatarRow
                                                title="Avatar"
                                                url={user.avatar_path}
                                                firstname={user.firstname}
                                                lastname={user.lastname}
                                            />
                                        )}

                                        <DetailRow
                                            title="Name"
                                            content={user.full_name}
                                        />

                                        <DetailRow
                                            title="Email"
                                            content={user.email}
                                        />

                                        {user.gender && (
                                            <DetailRow
                                                title="Gender"
                                                content={user.gender}
                                            />
                                        )}

                                        {user.country && (
                                            <DetailRow
                                                title="Country"
                                                content={user.country}
                                            />
                                        )}

                                        <DetailRow
                                            title="Joined"
                                            content={user.created_at_human}
                                        />
                                    </div>

                                    {(user.description) && (
                                        <div className="bg-white rounded-md shadow-xl mt-6">
                                            <HeaderRow
                                                title="Description"
                                            />

                                            <dt
                                                className="text-sm text-nav font-medium leading-6 mt-1 sm:mt-0 w-11/12 mx-auto py-4"
                                                dangerouslySetInnerHTML={{__html: user.description}}>
                                            </dt>
                                        </div>
                                    )}

                                    {(user.phone || user.linkedin_url) && (
                                        <div className="bg-white rounded-md shadow-xl mt-6">
                                            <HeaderRow
                                                title="Contact details"
                                            />

                                            {user.linkedin_url && (
                                                <DetailRow
                                                    title="LinkedIn"
                                                    content={user.linkedin_url}
                                                />
                                            )}

                                            {user.phone && (
                                                <DetailRow
                                                    title="Phone number"
                                                    content={user.phone}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {(user.skills.length > 0) && (
                                        <div className="bg-white rounded-md shadow-xl mt-6 ">
                                            <HeaderRow
                                                title="Skills"
                                            />

                                            <TagRow
                                                tags={user.skills}
                                            />
                                        </div>
                                    )}
                                </div>


                                <div className="flex-grow sm:pt-0 pt-6">
                                    <div className="bg-white rounded-md shadow-xl">
                                        <HeaderRow
                                            title="Cohorts"
                                        />

                                        <CompanyRow
                                            companies={user.companies}
                                        />
                                    </div>

                                    <div className="bg-white rounded-md shadow-xl mt-6">
                                        <HeaderRow
                                            title="Cohorts"
                                            subtitle={"Here's a list of cohorts " + user.full_name + "has access to."}
                                        />

                                        <CompanyRow
                                            companies={user.cohorts}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                </header>
            </article>
        </AuthenticatedLayout>
    );
}