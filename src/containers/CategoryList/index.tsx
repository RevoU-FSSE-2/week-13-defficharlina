import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { CategoryList as CategoryListComponent } from '../../components'
import { Category, GetCategoryResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

    const [categorys, setCategorys] = useState<Category[]>([]);
    const navigate = useNavigate();


    const token = localStorage.getItem('authToken')
    console.log("Auth Token:", token)

    /*const handleLogOut = () => {
        localStorage.removeItem('authToken')
        window.location.replace('/');
      }*/


    const getCategoryList = async () => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/category', {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        const response: GetCategoryResponse = await fetching.json();
        
        console.log("API Response:", response); // Tambahkan ini untuk melihat respons API di konsol
        
        setCategorys(response.data ?? []);
    };

    useEffect(
        () => {
            getCategoryList()
        },
        []
    )

    const removeCategory = async (id: string) => {
        try {
            const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, 
            {
                method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

            //const response = await fetching.json()

            //if(response) {
                //cara pertama panggil api lagi
                // getProductList()

                //cara kedua
                //setCategorys((categorys) => categorys.filter((category) => category.id !== id))
            //}

            if (fetching.ok) {
                // Check if the request was successful (status code 204 No Content)
                setCategorys((categorys) =>
                  categorys.filter((category) => category.id !== id)
                );
              }
        } catch (error) {
            alert(error);
        }
    };

    const columns: ColumnsType<Category> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',        
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',        
        },
        {
            title: 'Status',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (is_active: boolean) => (is_active ? "Active" : "Deactive"),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <>
                {/*<Button type={'default'} onClick={() => navigate(`/category/${record.id}`)}>Detail</Button>*/}
                <Button type={'primary'} onClick={() => navigate(`/category/edit/${record.id}`)}>Edit</Button>
                <Button type={'primary'} onClick={() => removeCategory(record.id) } style={{ marginLeft: "5px" }}>Delete</Button>
              </>
            ),
        },
    ];

    return (
        <>
            <h3>Daftar Category</h3>
            <Button type={'primary'} onClick={() => navigate('/category/new')}>Tambah Category Baru</Button>
            {/*<Button type={'primary'} onClick={() => navigate('/logout')}>Logout</Button>*/}
            {/*<Button type={'primary'} onClick={handleLogOut} danger>Log Out</Button>*/}
            <CategoryListComponent columns={columns} data={categorys}/>
        </>
    )
}

export default CategoryList