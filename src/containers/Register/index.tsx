import { RegisterForm as RegisterFormProps, RegisterResponse } from "../../types"
import { RegisterForm } from "../../components"

const Register = () => {

    const onSubmit = async (data: RegisterFormProps) => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: RegisterResponse = await fetching.json()
        if(response) {
            localStorage.setItem('authToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY5NTQyMjY5NywiZXhwIjoxNjk1NDQ0Mjk3fQ.pzYKTHSg0zTLfMHQmyVXGp1bvDC3l-a4Aj8ERbxhR30')
            window.location.replace('/')
        }
    }

    return (
        <RegisterForm onSubmit={onSubmit}/>
    )
}

export default Register