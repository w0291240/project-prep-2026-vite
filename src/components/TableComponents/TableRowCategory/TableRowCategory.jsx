import './TableRowCategory.scss'

const TableRowCategory = props => {

    const _editRowCategory = () => {
        props.onEditCategory(props.category)
    }

    const _deleteRowCategory = () => {
        props.onDeleteCategory(props.category)
    }

    return(
        
        <tr>
            <td>{props.category.id}</td>
            <td>{props.category.category_name}</td>
            <td><button onClick={ _editRowCategory }>Edit</button></td>
            <td><button onClick={ _deleteRowCategory }>Delete</button></td>
        </tr>
    )
}

export default TableRowCategory