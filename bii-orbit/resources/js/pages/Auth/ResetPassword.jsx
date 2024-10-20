import React from "react";
import {Field} from "@headlessui/react";
import {usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import GuestLayout from "../../components/Layout/GuestLayout.jsx";
import {InputDefault} from "../../components/Field/InputDefault.jsx";
import {forgotPasswordFields} from "../../config/Auth/forgotPasswordFields.jsx";
import useResetPasswordForm from "../../components/Request/Auth/ResetPasswordFormSubmit.jsx";

export default function ResetPassword({ title, token, email }) {
    const { errors } = usePage().props
    const { t, i18n } = useTranslation();
    const { values, handleChange, handleSubmit } = useResetPasswordForm();
    values.email = email;
    values.token = token;

    return (
        <GuestLayout
            title={title}
            handleSubmit={handleSubmit}
            btnText={t('reset_password')}
            blockTitle={t('reset_password')}
            blockDescription={t('reset_password_description')}
        >
            {forgotPasswordFields(values, errors, handleChange, t).map((field) => (
                <Field key={field.id} className="mt-6 space-y-3">
                    <InputDefault
                        {...field}
                    />
                </Field>
            ))}
        </GuestLayout>
    )
}
