import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { CategoryList, CategoryList as CategoryListComponent } from '../../components'
import { Category, GetCategoryResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const [categorys, setCategorys] = useState<Category[]>([]);
    const navigate = useNavigate();

    const getCategoryList = async () => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/category?page=1&name=mock category')
        const response: GetCategoryResponse = await fetching.json();
        setCategorys(response.categorys ?? []);
    }

    useEffect(
        () => {
            getCategoryList()
        },
        []
    )

    const removeCategory = async (id: number) => {
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
                method: 'DELETE'
            })

            const response = await fetching.json()

            if(response) {
                //cara pertama panggil api lagi
                // getProductList()

                //cara kedua
                setCategorys((categorys) => categorys.filter((category) => category.id !== id))
            }
        } catch (error) {
            alert(error)
        }
    }

    const columns: ColumnsType<Category> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',        
        },
        {
            title: 'Username',
            dataIndex: 'title',
            key: 'title',        
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <>
                {/*<Button type={'default'} onClick={() => navigate(`/category/${record.id}`)}>Detail</Button>*/}
                <Button type={'primary'} onClick={() => navigate(`/category/edit/${record.id}`)}>Edit</Button>
                <Button type={'primary'} color={'red'} onClick={() => removeCategory(record.id) }>Delete</Button>
              </>
            ),
        },
    ];

    return (
        <>
            <h3>Daftar Category</h3>
            <Button type={'primary'} onClick={() => navigate('/category/new')}>Tambah Category Baru</Button>
            <CategoryListComponent columns={columns} data={categorys}/>
        </>
    )
}

export default CategoryList