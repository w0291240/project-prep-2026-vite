import './TableRowItem.scss'

const TableRowItem = props => {

    const _editRowItem = () => {
        props.onEditItem(props.item)
    }

    const _deleteRowItem = () => {
        props.onDeleteItem(props.item)
    }

    return(
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.category_id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td>{props.item.quantity}</td>
            <td>{props.item.sku}</td>
            <td><button onClick={ _editRowItem }>Edit</button></td>
            <td><button onClick={ _deleteRowItem }>Delete</button></td>
        </tr>
    )
}

export default TableRowItem