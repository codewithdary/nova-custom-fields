import React from "react";
import {Head, usePage} from "@inertiajs/react";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import {Button} from "@material-tailwind/react";
import {Filepond} from "../../components/Form/Filepond";
import PageHeader from "../../components/Helper/PageHeader";
import {RadioButton} from "../../components/Form/RadioButton";
import {InputDefault} from "../../components/Form/InputDefault";
import SectionHeader from "../../components/Helper/SectionHeader";
import {SelectDefault} from "../../components/Form/SelectDefault.jsx";
import useNewsForm from "../../components/Request/NewsFormSubmit.jsx";
import {TextEditorDefault} from "../../components/Form/TextEditorDefault";
import {CheckboxDefault} from "../../components/Form/CheckboxDefault.jsx";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout.jsx";
import {MultiSelectDefault} from "../../components/Form/MultiSelectDefault.jsx";

const NewsCreate = ({ title, contentTags, withHeaders = true, visibilities, ...props }) => {
    const { errors } = usePage().props

    const {
        values,
        handleChange,
        handleRadioChange,
        handleSelectChange,
        handleSubmit,
        handleEditorChangeLocal,
        handleContentChange,
        handleCheckboxChange,
        handleImageChange,
        handleMultiSelectChange} = useNewsForm(props);

    return (
        <AuthenticatedLayout>
            <Head title={title} />

            <div className="overflow-y-auto" scroll-region>
                {withHeaders && (
                    <div>
                        <PageHeader
                            header="New news"
                            subheader="News"
                        />
                    </div>
                )}

                <FadeIn key="/">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="md:grid block md:grid-cols-3 gap-x-10 pt-4 sm:pt-10 pb-4">
                            <div className="col-span-2">
                                <SectionHeader
                                    text="General"
                                    subheader="Add as much information about your news right here."
                                    showSubParagraph={true}
                                />

                                <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                    <InputDefault
                                        id="title"
                                        name="title"
                                        type="text"
                                        label="Title"
                                        required={true}
                                        value={values.title}
                                        error={errors.title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="md:pb-8 pb-0 pr-0 md:pr-4 grid grid-cols-1 sm:grid-cols-2">
                                    <div className="pr-0 md:pr-4 sm:pb-0">
                                        <SelectDefault
                                            name="type"
                                            type="text"
                                            label="Visibility"
                                            rows={visibilities}
                                            required={true}
                                            value={values.visibility}
                                            error={errors.visibility}
                                            handleSelectChange={handleSelectChange}
                                        />
                                    </div>

                                    <div className="pb-6 sm:pb-0 w-full font-poppins">
                                        <MultiSelectDefault
                                            id="tags"
                                            name="tags"
                                            type="text"
                                            label="Tags"
                                            required={true}
                                            rows={contentTags}
                                            value={values.tags}
                                            error={errors.tags}
                                            handleMultiSelectChange={handleMultiSelectChange}
                                        />
                                    </div>
                                </div>

                                <div className="md:pb-8 pb-0 pr-0 md:pr-4">
                                    <TextEditorDefault
                                        id="content"
                                        name="content"
                                        height="390px"
                                        value={values.content}
                                        error={errors.content}
                                        onEditorChange={handleEditorChangeLocal}
                                        onContentChange={handleContentChange}
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 z-1 pt-6 md:pt-0">
                                <div className="flex flex-col">
                                    <div className="pb-4">
                                        <SectionHeader
                                            text="Banner"
                                            subheader="What banner should be shown?"
                                            showSubParagraph={true}
                                        />

                                        <Filepond
                                            id="image"
                                            name="image"
                                            maxFiles={2}
                                            value={values.image}
                                            allowMultiple={true}
                                            error={errors.image}
                                            acceptedFileTypes={['image/png', 'image/jpeg']}
                                            handleImageChange={handleImageChange}
                                            label='Drag & Drop your file or <span class="filepond--label-action">Browse</span> for your banner <span class="text-red-500"> * </span>'
                                        />
                                    </div>

                                    <SectionHeader
                                        text="News status"
                                        subheader="Should the public see it directly?"
                                        showSubParagraph={true}
                                    />

                                    <RadioButton
                                        value={1}
                                        label="Live"
                                        id="is_published"
                                        name="is_published"
                                        hasDescription={true}
                                        handleRadioChange={handleRadioChange}
                                        description="News will be accessible to the audience instantly."
                                    />

                                    <RadioButton
                                        value={0}
                                        label="Draft"
                                        id="is_published"
                                        name="is_published"
                                        hasDescription={true}
                                        error={errors.is_published}
                                        handleRadioChange={handleRadioChange}
                                        description="News is not ready for publication or broadcasting."
                                    />
                                </div>

                                <div className="pt-4">
                                    <SectionHeader
                                        text="DTL intranet"
                                        subheader="Should it be synchronize to DTL intranet?"
                                        showSubParagraph={true}
                                    />

                                    <CheckboxDefault
                                        header="Yes"
                                        id="is_synchronized"
                                        value={values.is_synchronized}
                                        error={errors.is_synchronized}
                                        description="Synchronize with DTL intranet"
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </div>

                                <div className="pt-6">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        className="bg-dark"
                                        disabled={!values.title || !values.content || !values.visibility || !values.tags || !values.image || !values.is_published}>
                                        Create news
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </FadeIn>
            </div>
        </AuthenticatedLayout>
    )
}

export default NewsCreate