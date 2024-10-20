export const resetPasswordFields = (values, errors, handleChange, t) => [
    {
        id: "email",
        type: "email",
        name: "Email",
        required: true,
        value: values.email,
        error: errors.email,
        label: "Email address",
        onChange: handleChange,
        placeholder: t('email_placeholder'),
    },
];
