import { CategoryForm as CategoryFormProps } from "../../types"
import { CategoryForm } from "../../components"
import { useNavigate } from "react-router-dom"

const CategoryNew = () => {

    const navigate = useNavigate()

    const onSubmit = async (values: CategoryFormProps) => {
        try {
            const token = localStorage.getItem('authToken')

            const fetching = await fetch('https://mock-api.arikmpt.com/api/category/create', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values)
            })
            await fetching.json()
            navigate('/category')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <CategoryForm onSubmit={onSubmit}/>
    )
}

export default CategoryNew