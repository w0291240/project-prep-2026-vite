import './TableCategory.scss'
import TableRowCategory from '../TableRowCategory/TableRowCategory'

const TableCategory = props => {

    const _editCategory = category => {
        props.onEditCategory(category)
    }

    const _deleteCategory = category => {
        props.onDeleteCategory(category)
    }

    return(
        <div className="Table-Component">
            <table>
                <thead>
                    <tr>
                        <th>ID | </th>
                        <th>Category Name | </th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { props.categories.map(
                        (category, i) => { return( <TableRowCategory key={i} index={i} category={category} onEditCategory={_editCategory} onDeleteCategory={_deleteCategory} /> ) }
                    )}
                </tbody>
            </table> 
        </div>
    )
    }
export default TableCategory