import { CategoryForm } from "../../components"
import { CategoryForm as CategoryFormProps, Category } from "../../types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";

const CategoryEdit = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState<Category>()

    const { id } = useParams();

    const getCategory = useCallback(
        async () => {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`)
            const response: Category = await fetching.json();
    
            setCategory(response)
        },
        [id]
    )

    useEffect(
        () => {
            getCategory()
        },
        [getCategory]
    )

    const onSubmit = async (values: CategoryFormProps) => {
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/update${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(values)
            })
            await fetching.json()
            navigate('/category')
        } catch (error) {
            alert(error)
        }
    }

    if(category) {
        return <CategoryForm onSubmit={onSubmit} category={category}/>
    }

    return null
}

export default CategoryEdit