import React from "react";
import { Field } from '@headlessui/react'
import { useTranslation } from "react-i18next";
import { Link, usePage } from "@inertiajs/react";
import {loginFields} from "../../config/Auth/loginFields.jsx";
import GuestLayout from "../../components/Layout/GuestLayout.jsx";
import { InputDefault } from "../../components/Field/InputDefault.jsx";
import useLoginForm from "../../components/Request/Auth/LoginFormSubmit.jsx";
import { CheckboxDefault } from "../../components/Field/CheckboxDefault.jsx";

export default function Index({ title, resetPasswordRoute }) {
    const { errors } = usePage().props;
    const { values, handleChange, handleSubmit } = useLoginForm(errors);
    const { t } = useTranslation();

    return (
        <GuestLayout
            title={title}
            btnText={t('login')}
            handleSubmit={handleSubmit}
            blockTitle={t('login_title')}
            blockDescription={t('login_description')}
        >

            {loginFields(values, errors, handleChange, t).map((field) => (
                <Field key={field.id} className="mt-6 space-y-3">
                    <InputDefault
                        {...field}
                    />
                </Field>
            ))}

            <div className="mt-8 flex items-center justify-between text-sm/5">
                <CheckboxDefault
                    id="remember"
                    type="checkbox"
                    name="remember"
                    value={values.remember}
                    onChange={handleChange}
                    label={t('remember_me')}
                />

                {resetPasswordRoute && (
                    <Link
                        href={resetPasswordRoute}
                        className="first after font-medium hover:text-primary text-paragraph transition-all"
                    >
                        {t('forgot_password')}
                    </Link>
                )}
            </div>
        </GuestLayout>
    );
}
