import * as yup from 'yup'

export const initialValues = {
    name: '',
    email:'',
    password: ''
}

export const validationSchema = yup.object({
    name: yup.string().required('Please Enter Your Username'),
    email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
    password: yup.string().required("Please Enter Your Password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Use at least 8 characters, one uppercase letter, one lowercase letter, and one number"
      )
})