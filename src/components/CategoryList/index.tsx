import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { Category } from "../../types"

interface Props {
    data: Category[];
    columns: ColumnsType<Category>;
}

const CategoryList = ({ data, columns} : Props) => {

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default CategoryList