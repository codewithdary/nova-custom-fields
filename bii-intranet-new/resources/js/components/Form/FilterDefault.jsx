import React from "react";
import {usePage} from "@inertiajs/react";
import {SelectDefault} from "./SelectDefault";
import {ButtonDefault} from "./ButtonDefault";
import SectionHeader from "../Helper/SectionHeader";
import {FunnelIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import useNewsFilterForm from "../Request/News/NewsFilterFormSubmit.jsx";
import {Popover, PopoverHandler, PopoverContent, Button,} from "@material-tailwind/react";
import useEventFilterForm from "../Request/Event/EventFilterFormSubmit.jsx";
import useCommunityFilterForm from "../Request/Community/CommunityFilterFormSubmit.jsx";

function UserFilters({ skills, companies }) {
    const queryParams = new URLSearchParams(window.location.search);

    const {
        values,
        handleCompanyChange,
        handleSkillChange,
        handleSubmit } = useCommunityFilterForm();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <SelectDefault
                    name="type"
                    type="text"
                    label="Company"
                    value={values.company}
                    current={queryParams.get('company') ?? ''}
                    rows={companies}
                    handleSelectChange={handleCompanyChange}
                    required={false}
                />
            </div>

            <div className="flex gap-2 pt-6">

                <SelectDefault
                    name="type"
                    type="text"
                    label="Skills"
                    value={values.skill}
                    current={queryParams.get('skill') ?? ''}
                    rows={skills}
                    handleSelectChange={handleSkillChange}
                    required={false}
                />
            </div>

            <div className="flex gap-2 pt-6 w-full">
                <ButtonDefault
                    variant="filled"
                    type="submit"
                    text="Apply filters"
                />

                {(values.company || values.tag) && (
                    <div>
                        <a href="/community">
                            <Button
                                variant="outlined"
                                className="normal-case font-poppins border-warning border-2 text-warning">
                                Clear filter
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </form>
    );
}

function NewsFilters({ page, options, visibilities }) {
    const { auth } = usePage().props
    const queryParams = new URLSearchParams(window.location.search);

    const {
        value,
        handleVisibilitySelectChange,
        handleContentTagChange,
        handleSubmit } = useNewsFilterForm();

    return (
        <form onSubmit={handleSubmit}>
                {auth.user.isBiiUser && (
                    <div className="flex gap-2 pb-4">
                        <SelectDefault
                            name="type"
                            type="text"
                            label="Visibility of news"
                            value={value.visibility}
                            current={queryParams.get('visibility') ?? ''}
                            rows={visibilities}
                            handleSelectChange={handleVisibilitySelectChange}
                            required={false}
                        />
                    </div>
                )}

            <div className="flex gap-2">
                <SelectDefault
                    name="type"
                    handleSelectChange={handleContentTagChange}
                    value={value.content_tag}
                    current={queryParams.get('content_tag') ?? ''}
                    type="text"
                    label="Content tag"
                    rows={options}
                    required={false}
                />
            </div>

            <div className="flex gap-2 pt-6 w-full">
                <ButtonDefault
                    variant="filled"
                    type="submit"
                    text="Apply filter"
                />

                {(value.content_tag || value.visibility) && (
                    <div>
                        <a href="/news">
                            <Button
                                variant="outlined"
                                className="normal-case font-poppins border-warning border-2 text-warning">
                                Clear filter
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </form>
    );
}


function EventsFilter({ page, companyTags, contentTags }) {
    const { auth } = usePage().props
    const queryParams = new URLSearchParams(window.location.search);

    const {
        values,
        handleCompanyTagChange,
        handleContentTagChange,
        handleSubmit } = useEventFilterForm();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <SelectDefault
                    name="type"
                    handleSelectChange={handleContentTagChange}
                    value={values.content_tag}
                    current={queryParams.get('content_tag') ?? ''}
                    type="text"
                    label="Content tag"
                    rows={contentTags}
                    required={false}
                />
            </div>

            <div className="flex gap-2 pt-6">
                <SelectDefault
                    name="type"
                    handleSelectChange={handleCompanyTagChange}
                    value={values.company_tag}
                    current={queryParams.get('company_tag') ?? ''}
                    type="text"
                    label="Audience tag"
                    rows={companyTags}
                    required={false}
                />
            </div>

            <div className="flex gap-2 pt-6 w-full">
                <ButtonDefault
                    variant="filled"
                    type="submit"
                    text="Apply filter"
                />

                {(values.company_tag || values.content_tag) && (
                    <div>
                        <a href="/news">
                            <Button
                                variant="outlined"
                                className="normal-case font-poppins border-warning border-2 text-warning">
                                Clear filter
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </form>
    );
}

export const FilterDefault = ({
                                  type,
                                  subheader,
                                  isIcon = false,
                                  options = null,
                                  visibilities = null,
                                  companies = null,
                                  contentTags = null,
                                  skills = null}) => {
    return (
        <Popover placement="bottom">
            <PopoverHandler>
                {isIcon ? (
                    <FunnelIcon
                        className="w-5 text-nav hover:text-nav-hover transition-all"
                    />
                ) : (
                    <div className="flex text-sm hover:cursor-pointer text-paragraph">
                        Filter
                        <ChevronDownIcon
                            className="w-5 h-5"
                        />
                    </div>
                )}
            </PopoverHandler>

            <PopoverContent className="w-96 z-50">
                <SectionHeader
                    text="Filter options"
                    subheader={subheader}
                    showSubParagraph={true}
                />

                {type === 'user' && (
                   <UserFilters skills={skills} companies={companies} />
                )}

                {type === 'news' && (
                    <NewsFilters options={options} visibilities={visibilities} />
                )}

                {type === 'events' && (
                    <EventsFilter companyTags={options} contentTags={contentTags} />
                )}
            </PopoverContent>
        </Popover>
    );
}