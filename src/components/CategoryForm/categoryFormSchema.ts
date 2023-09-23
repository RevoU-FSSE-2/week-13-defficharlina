import * as yup from 'yup'

export const initialValues = {
    name: '',
    is_active: true
}

export const validationSchema = yup.object({
    name: yup.string().required(),
    is_active: yup.boolean().required()
})