export const forgotPasswordFields = (values, errors, handleChange, t) => [
    {
        id: "email",
        type: "text",
        name: "Email",
        required: true,
        isDisabled: true,
        value: values.email,
        error: errors.email,
        label: "Email address",
        onChange: handleChange,
        placeholder: t('email_placeholder'),
    },
    {
        id: "password",
        required: true,
        type: "password",
        name: "Password",
        label: "Password",
        value: values.password,
        error: errors.password,
        onChange: handleChange,
        placeholder: t('enter_password'),
    },
    {
        required: true,
        type: "password",
        onChange: handleChange,
        id: "password_confirmation",
        name: "Password confirmation",
        label: "Password confirmation",
        placeholder: t('enter_password'),
        value: values.password_confirmation,
        error: errors.password_confirmation,
    },
];