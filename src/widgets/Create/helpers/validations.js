const { createValidation } = require('vuelidate')

export const validateData = createValidation((data, validationRules) => {
    const errors = {}
    Object.keys(validationRules).forEach((fieldName) => {
        const fieldRules = validationRules[fieldName]
        const fieldValue = data[fieldName]
        const fieldErrors = []
        Object.keys(fieldRules).forEach((rule) => {
            const ruleValidator = fieldRules[rule]
            const isValid = ruleValidator(fieldValue)
            if (!isValid) {
                fieldErrors.push(rule)
            }
        })
        if (fieldErrors.length > 0) {
            errors[fieldName] = fieldErrors
        }
    })
    return errors
})
