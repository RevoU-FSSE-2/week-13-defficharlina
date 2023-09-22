import { RegisterForm as RegisterFormProps, RegisterResponse } from "../../types"
import { RegisterForm } from "../../components"

const Register = () => {

    const onSubmit = async (data: RegisterFormProps) => {
        const fetching = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: RegisterResponse = await fetching.json()
        if(response) {
            localStorage.setItem('token', response.token)
            window.location.replace('/')
        }
    }

    return (
        <RegisterForm onSubmit={onSubmit}/>
    )
}

export default Register