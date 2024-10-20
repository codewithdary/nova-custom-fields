export const loginFields = (values, errors, handleChange, t) => [
    {
        id: "email",
        type: "text",
        name: "Email",
        required: true,
        value: values.email,
        error: errors.email,
        label: "Email address",
        onChange: handleChange,
        placeholder: t('email_placeholder'),
    },
    {
        id: "password",
        type: "password",
        name: "Password",
        required: true,
        value: values.password,
        error: errors.password,
        label: "Password",
        onChange: handleChange,
        placeholder: t('enter_password'),
    },
];
