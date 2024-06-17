import React from "react";
import PageHeader from "../../components/Helper/PageHeader";
import SectionHeader from "../../components/Helper/SectionHeader";
import {InputDefault} from "../../components/Form/InputDefault";
import {AvatarUpload} from "../../components/Form/AvatarUpload";
import {InputWithDropdown} from "../../components/Form/InputWithDropdown";
import {SelectDefault} from "../../components/Form/SelectDefault";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {SortableTable} from "../../components/Table/SortableTable";
import skills from "../../data/skills.json";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {TextEditorDefault} from "../../components/Form/TextEditorDefault.jsx";
import {Head, usePage} from "@inertiajs/react";
import {MultiSelectDefault} from "../../components/Form/MultiSelectDefault.jsx";
import {SwitchDefault} from "../../components/Form/SwitchDefault.jsx";
import useNewsForm from "../../components/Request/NewsFormSubmit.jsx";
import useProfileForm from "../../components/Request/Profile/ProfileFormSubmit.jsx";

const Profile = ({ ...props }) => {
     const combined = [...props.current.companies, ...props.current.cohorts];
     const combinedCount = combined.length;
    const { errors } = usePage().props

    const {
        values,
        handleSubmit,
        handleFirstNameChange,
        handleLastNameChange,
        handleGenderSelectChange,
        handleCountrySelectChange,
        handleLinkedinUrlChange,
        handleDescriptionEditorChangeLocal,
        handleDescriptionContentChange,
        handleContentTagsChange,
        handleCompanyTagsMultiSelectChange,
        handleSkillsMultiSelectChange} = useProfileForm(props);

    return (
        <AuthenticatedLayout>
            <Head title={props.title} />

            <div>
                <PageHeader
                    header={props.current.full_name}
                    subheader="Edit Profile"
                />

                <FadeIn key="/">
                    <form onSubmit={handleSubmit}>
                        <div className="md:grid block md:grid-cols-3 gap-x-10 pt-4 sm:pt-10 pb-4">
                            <div className="col-span-2">
                                <SectionHeader
                                    text="General"
                                    subheader="Add as much information about your news right here."
                                    showSubParagraph={true}
                                />

                                <div className="md:pb-8 pb-0 grid grid-cols-1 sm:grid-cols-2">
                                    <div className="pr-0 md:pr-4 sm:pb-0">
                                        <InputDefault
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            label="First name"
                                            required={true}
                                            value={values.firstname}
                                            error={errors.firstname}
                                            onChange={handleFirstNameChange}
                                        />
                                    </div>

                                    <div className="w-full font-poppins">
                                        <InputDefault
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            label="Last name"
                                            required={true}
                                            value={values.lastname}
                                            error={errors.lastname}
                                            onChange={handleLastNameChange}
                                        />
                                    </div>
                                </div>

                                <div className="md:pb-8 pb-0 grid grid-cols-1 sm:grid-cols-2">
                                    <div className="pr-0 md:pr-4 sm:pb-0">
                                        <SelectDefault
                                            name="gender"
                                            type="text"
                                            required={true}
                                            label="Gender"
                                            // error={skills}
                                            rows={skills}
                                            current={values.gender}
                                            handleSelectChange={handleGenderSelectChange}
                                        />
                                    </div>

                                    <div className="w-full font-poppins">
                                        <SelectDefault
                                            name="country"
                                            type="text"
                                            required={true}
                                            label="Country"
                                            // error={skills}
                                            rows={skills}
                                            current={values.country}
                                            handleSelectChange={handleCountrySelectChange}
                                        />
                                    </div>
                                </div>

                                <div className="md:pb-8 pb-0 grid grid-cols-1 sm:grid-cols-2">
                                    <div className="pr-0 md:pr-4 sm:pb-0">
                                        <InputWithDropdown />
                                    </div>

                                    <div className="pb-6 sm:pb-0 w-full font-poppins">
                                        <InputDefault
                                            id="linkedin_url"
                                            name="linkedin_url"
                                            type="text"
                                            label="LinkedIn URL"
                                            required={true}
                                            value={values.linkedin_url}
                                            error={errors.linkedin_url}
                                            onChange={handleLinkedinUrlChange}
                                        />
                                    </div>

                                    <div className="md:pt-8 pt-0 w-full font-poppins col-span-2">
                                        <TextEditorDefault
                                            id="description"
                                            name="description"
                                            height="390px"
                                            error={errors.description}
                                            value={values.description}
                                            onEditorChange={handleDescriptionEditorChangeLocal}
                                            onContentChange={handleDescriptionContentChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 z-1 pt-6 md:pt-0">
                                <div className="flex flex-col">
                                    <div className="pb-4">
                                        <SectionHeader
                                            text="Relationships"
                                            subheader="Get notified when new items are released."
                                            showSubParagraph={true}
                                        />

                                        <div className="pb-6 sm:pb-8 w-full font-poppins">
                                            <MultiSelectDefault
                                                id="content_tags"
                                                name="content_tags"
                                                type="text"
                                                label="Content tags"
                                                required={true}
                                                rows={props.contentTags}
                                                selected={props.selectedContentTags}
                                                value={values.content_tags}
                                                error={errors.content_tags}
                                                handleMultiSelectChange={handleContentTagsChange}
                                            />
                                        </div>

                                        <div className="pb-6 sm:pb-8 w-full font-poppins">
                                            <MultiSelectDefault
                                                id="company_tags"
                                                name="company_tags"
                                                type="text"
                                                label="Company tags"
                                                required={true}
                                                rows={props.companyTags}
                                                selected={props.selectedCompanyTags}
                                                value={values.company_tags}
                                                error={errors.company_tags}
                                                handleMultiSelectChange={handleCompanyTagsMultiSelectChange}
                                            />
                                        </div>

                                        <div className="pb-6 sm:pb-8 w-full font-poppins">
                                            <MultiSelectDefault
                                                id="skills"
                                                name="skills"
                                                type="text"
                                                label="Skills"
                                                required={true}
                                                rows={props.skills}
                                                selected={props.selectedSkills}
                                                value={values.skills}
                                                error={errors.skills}
                                                handleMultiSelectChange={handleSkillsMultiSelectChange}
                                            />
                                        </div>

                                        <SectionHeader
                                            text="Account details"
                                            subheader="Here are some details you cannot modify."
                                            showSubParagraph={true}
                                        />

                                        <div className="pb-0 sm:pb-8 w-full font-poppins">
                                            <SwitchDefault
                                                isDisabled={true}
                                                label="Onboarded"
                                                description="User is onboarded."
                                            />
                                        </div>

                                        <div className="pb-0 sm:pb-8 w-full font-poppins">
                                           <SwitchDefault
                                               isDisabled={true}
                                               label="Terms & agreement"
                                               description="User has accepted the terms and agreement."
                                           />
                                       </div>

                                        <div className="block antialiased text-sm leading-normal font-poppins text-nav font-normal">
                                            Your account has been verified on {props.current.email_verified_at}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 sm:pb-0 pb-6">
                            <SectionHeader
                                text="Avatar"
                                subheader="These are the roles a BioInnovation Institute admin has assigned to you."
                                showSubParagraph={true}
                            />

                            <AvatarUpload />
                        </div>

                        <div className="col-span-2 sm:pb-0 pb-6 pt-0 sm:pt-8">
                            <SectionHeader
                                text="Email address"
                                subheader="This contact will be shown to others publicly, so choose it carefully."
                                showSubParagraph={true}
                            />

                            <InputDefault
                                disabled={true}
                                name="linkedin_url"
                                type="url"
                                label="info@codewithdary.com"
                                required={true}
                            />
                        </div>

                        <div className="col-span-2 sm:pb-0 pb-6 pt-0 sm:pt-8">
                            <SectionHeader
                                text="Roles"
                                subheader="These are the roles a BioInnovation Institute admin has assigned to you."
                                showSubParagraph={true}
                            />

                            <InputDefault
                                disabled={true}
                                name="linkedin_url"
                                type="url"
                                label="System Admin, Company Admin, BII Coordinator"
                                required={false}
                            />
                        </div>

                        <div className="pt-0 sm:pt-8">
                            <ButtonDefault
                                variant="filled"
                                text="Save Changes"
                            />
                        </div>
                    </form>
                </FadeIn>
            </div>

            <FadeIn key="/">
                <div className="pt-9">
                    <SectionHeader
                        text="Companies & cohorts"
                        subheader="Here's a list of companies and cohorts you are associated with."
                        count={combinedCount ?? '0'}
                        hasChip={true}
                        showSubParagraph={true}
                    />

                    <SortableTable
                        headers={["Name", "Program", "Is admin", "Status"]}
                        rows={combined}
                    />
                </div>
            </FadeIn>
        </AuthenticatedLayout>
    )
}

export default Profile