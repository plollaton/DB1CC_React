export const validateTaskSearch = value => (
    !value || value.length <= 10
    ? undefined
    :'O termo de busca deve ter até 50 caracteres'
)

export const validatePostDescription = (value, formValues) => (
    value && value.length <= 10
    ? undefined
    :'O termo de busca deve ter até 10 caracteres'
);