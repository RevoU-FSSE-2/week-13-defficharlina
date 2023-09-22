import { LoginForm as LoginFormProps, LoginResponse } from "../../types"
import { LoginForm } from "../../components"

const Login = () => {

    const onSubmit = async (data: LoginFormProps) => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: LoginResponse = await fetching.json()
        if(response) {
            localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY5NTQyMjY5NywiZXhwIjoxNjk1NDQ0Mjk3fQ.pzYKTHSg0zTLfMHQmyVXGp1bvDC3l-a4Aj8ERbxhR30', response.token)
            window.location.replace('/')
        }
    }

    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}

export default Login