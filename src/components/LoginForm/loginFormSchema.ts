import * as yup from 'yup'

export const initialValues = {
    email: '',
    password: ''
}

export const validationSchema = yup.object({
    email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
    password: yup.string().required("Please Enter Your Password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Use at least 8 characters, one uppercase letter, one lowercase letter, and one number"
      )
})