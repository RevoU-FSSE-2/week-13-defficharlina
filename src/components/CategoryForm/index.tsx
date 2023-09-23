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
                    <Input name={'name'}
                        value={formMik.values.name} 
                        onChange={formMik.handleChange('name')}
                        status={formMik.errors.name && 'error'}
                    />
                    {formMik.errors.name && (
                        <Typography.Paragraph>{formMik.errors.name}</Typography.Paragraph>
                    )}
                </div>

                <div>
                <Typography.Paragraph>{"Status"}</Typography.Paragraph>
                <Select
                    value={formMik.values.is_active}
                    onChange={(value) => formMik.setFieldValue("is_active", value)}
                    options={[
                    {
                        value: true,
                        label: "Active",
                    },
                    {
                        value: false,
                        label: "Deactive",
                    },
                    ]}
                ></Select>
                {formMik.errors.is_active && (
                    <Typography.Paragraph style={{ color: "red" }}>
                    {formMik.errors.is_active}
                    </Typography.Paragraph>
                )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default CategoryForm