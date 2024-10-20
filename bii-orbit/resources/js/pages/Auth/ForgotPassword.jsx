import React from "react";
import {Field} from "@headlessui/react";
import {usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import GuestLayout from "../../components/Layout/GuestLayout.jsx";
import {InputDefault} from "../../components/Field/InputDefault.jsx";
import {resetPasswordFields} from "../../config/Auth/resetPasswordFields.jsx";
import useForgotPasswordForm from "../../components/Request/Auth/ForgotPasswordFormSubmit.jsx";

export default function ForgotPassword({ title }) {
    const { errors } = usePage().props
    const { t, i18n } = useTranslation();
    const { values, handleChange, handleSubmit } = useForgotPasswordForm(errors);

    return (
        <GuestLayout
            title={title}
            blockTitle={t('reset')}
            handleSubmit={handleSubmit}
            btnText={t('reset_password')}
            blockDescription={t('reset_description')}
        >
            {resetPasswordFields(values, errors, handleChange, t).map((field) => (
                <Field key={field.id} className="mt-6 space-y-3">
                    <InputDefault
                        {...field}
                    />
                </Field>
            ))}
        </GuestLayout>
    )
}
