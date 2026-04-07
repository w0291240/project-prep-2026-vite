import './TableItem.scss'
import TableRowItem from "../TableRowItem/TableRowItem.jsx"


const TableItem = props => {

    const _editItem = item => {
        props.onEditItem(item)
    }

    const _deleteItem = item => {
        props.onDeleteItem(item)
    }

    return(
        
        <div className="Table-Component">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category ID</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { props.items.map(
                        (item, i) => { return( <TableRowItem key={i} index={i} item={item} onEditItem={_editItem} onDeleteItem={_deleteItem} /> ) }
                    )}
                </tbody>
            </table> 
        </div>
    )
    }
export default TableItem