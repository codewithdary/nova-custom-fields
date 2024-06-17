import '../../index.css';
import React from "react";
import PageHeader from "../../components/Helper/PageHeader";
import SectionHeader from "../../components/Helper/SectionHeader";
import {InputDefault} from "../../components/Form/InputDefault";
import {AvatarUpload} from "../../components/Form/AvatarUpload";
import {InputWithDropdown} from "../../components/Form/InputWithDropdown";
import {SelectDefault} from "../../components/Form/SelectDefault";
import {TextareaDefault} from "../../components/Form/TextareaDefault";
import {ButtonDefault} from "../../components/Form/ButtonDefault";
import {FadeIn} from "../../components/Helper/FadeIn";
import {SortableTable} from "../../components/Table/SortableTable";
import data from "../../data/companies.json";
import qualifications from "../../data/qualifications.json";
import skills from "../../data/skills.json";
import {InlineWidget, PopupWidget} from "react-calendly";

export const Profile = () => {
    return (
        <div>

            <PageHeader
                header="Dary Nazar"
                subheader="Edit Profile"
            />

            <FadeIn key="/">
                <div className="pt-4 sm:pt-10 pb-4">
                    <SectionHeader
                        text="General"
                    />
                </div>

                <form action="" className="w-full sm:grid sm:grid-cols-2 gap-8">
                    <InputDefault
                        name="firstname"
                        type="text"
                        label="First name"
                        required={true}
                    />

                    <InputDefault
                        name="lastname"
                        type="text"
                        label="Last name"
                        required={true}
                    />

                    <InputDefault
                        name="linkedin_url"
                        type="url"
                        label="LinkedIn URL"
                        required={true}
                    />

                    <InputWithDropdown />

                    <SelectDefault
                        name="skills"
                        type="text"
                        label="Skills"
                        rows={skills}
                        required={true}
                    />

                    <SelectDefault
                        name="qualifications"
                        type="text"
                        label="Qualifications"
                        rows={qualifications}
                        required={true}
                    />

                    <TextareaDefault
                        name="description"
                        type="text"
                        label="Description"
                        required={true}
                    />

                    <div className="col-span-2 sm:pb-0 pb-6">
                        <SectionHeader
                            text="Avatar"
                            subheader="These are the roles a BioInnovation Institute admin has assigned to you."
                            showSubParagraph={true}
                        />

                        <AvatarUpload />
                    </div>

                    <div className="col-span-2 sm:pb-0 pb-6">
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

                    <div className="col-span-2 sm:pb-0 pb-6">
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

                    <ButtonDefault
                        variant="filled"
                        text="Save Changes"
                    />
                </form>
            </FadeIn>

            <FadeIn key="/">
                <div className="pt-9">
                    <SectionHeader
                        text="Companies & cohorts"
                        subheader="Here's a list of companies and cohorts you are associated with."
                        count="2"
                        hasChip={true}
                        showSubParagraph={true}
                    />

                    <SortableTable
                        headers={["Name", "Program", "Member Since", "Visibility"]}
                        rows={data}
                    />
                </div>

                <div className="pt-10">
                    <div className="App">
                        <PopupWidget
                            url="https://calendly.com/codewithdary"
                            /*
                             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                             */
                            rootElement={document.getElementById("root")}
                            text="Click here to schedule!"
                            textColor="#ffffff"
                            color="#00a2ff"
                        />
                    </div>

                    <div className="App">
                        <InlineWidget url="https://calendly.com/codewithdary" />
                    </div>


                    {/*<PopupWidget*/}
                    {/*    url="https://calendly.com/codewithdary"*/}
                    {/*    /**/}
                    {/*     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to*/}
                    {/*     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.*/}
                    {/*     */}
                    {/*    rootElement={document.getElementById("root")}*/}
                    {/*    text="Click here to schedule!"*/}
                    {/*    textColor="#ffffff"*/}
                    {/*    color="#00a2ff"*/}
                    {/*/>*/}
                </div>
            </FadeIn>
        </div>
    )
}
