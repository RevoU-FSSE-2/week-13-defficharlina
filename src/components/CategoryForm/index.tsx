import { Button, Card, Input, Select, Typography } from "antd"
import { useFormik } from "formik"
import { Category, CategoryForm as CategoryFormProps } from "../../types"
import { initialValues, validationSchema } from "./categoryFormSchema"

interface Props {
    onSubmit: (values: CategoryFormProps) => void
    category?: Category
}

const CategoryForm = ({ onSubmit, category } : Props) => {

    const handleSubmit = (values: CategoryFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: category ?? initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title={"Category Form"} bordered style={{ width: 350 }}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Name'}</Typography.Paragraph>
                    <Input name={'title'}
                        value={formMik.values.title} 
                        onChange={formMik.handleChange('title')}
                        status={formMik.errors.title && 'error'}
                    />
                    {formMik.errors.title && (
                        <Typography.Paragraph>{formMik.errors.title}</Typography.Paragraph>
                    )}
                </div>
                <div>
                <Typography.Paragraph>{'Status'}</Typography.Paragraph>
                <Select
                    value={formMik.values.status ? 'true' : 'false'} // Mengonversi nilai boolean ke string
                    onChange={(value) => formMik.setFieldValue('status', value === 'true')} // Mengonversi kembali ke boolean
                    className={formMik.errors.status ? 'error' : ''}
                >
                    <Select.Option value="true">Active</Select.Option>
                    <Select.Option value="false">Inactive</Select.Option>
                </Select>
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default CategoryForm