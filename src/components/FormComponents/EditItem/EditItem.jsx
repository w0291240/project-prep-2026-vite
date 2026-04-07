import './EditItem.scss'
import Button from '../Button/Button.jsx'
import { useState, useEffect } from 'react'

const EditItem = props => {

    const _update = () => {
        props.onUpdateItem(item)
        _clear()
    }

        const _cancel = () => {
        props.onCancelItem(item)
        _clear()
    }

    //variables to mirror what is in each input field
    // const [id, setItemID] = useState('')
    const [category_id, setCategoryID] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [sku, setSku] = useState('')

    //variable to update with all 3 values with the end goal
    //of passing that new collection back up to App, where we will
    //append it to entries
    const [item, setItem] = useState({})

    const [buttonState, setButtonState] = useState(false)

    const _clear = () => {
        // setItemID('')
        setCategoryID('')
        setTitle('')
        setDescription('')
        setPrice('')
        setQuantity('')
        setSku('')
    }

    useEffect(() => {
        console.log('item changed')
        console.log(`item: ${JSON.stringify(item)}`)

         setButtonState( (item.category_id === '' || item.title === "" || item.description === '' || item.price === '' || item.quantity === '' || item.sku === ''
        ) ? false : true ) 

    },[item])

useEffect(() => {
        setItem({'category_id' : category_id, 'title': title, 'description': description, 'price': price, 'quantity': quantity, 'sku': sku})
    },[category_id, title, description, price, quantity, sku])


const _detectValueChanged = (key, value) => {
        if (key === 'category_id') {
            setCategoryID(value)
        } else if (key === 'title') {
            setTitle(value)
        } else if (key === 'description') {
            setDescription(value)
        } else if (key === 'price') {
            setPrice(value)
        } else if (key === 'quantity') {
            setQuantity(value)
        } else if (key === 'sku') {
            setSku(value)
        }
        console.log('_detectValueChanged triggered')
    }

    useEffect(() => {
        // setItemID(props.item.id)
        setCategoryID(props.item.category_id)
        setTitle(props.item.title)
        setDescription(props.item.description)
        setPrice(props.item.price)
        setQuantity(props.item.quantity)
        setSku(props.item.sku)
    },[props])//[] should be fine, [props] guarantees values received

    return(
        <div className='EditItem'>
            
            <br/>
            <label>Category:</label>
            <select value={category_id} onChange={e => _detectValueChanged('category_id', e.target.value)} >
                <option value="">Select a category</option>
                {(props.categories ?? []).map(category => (
                <option key={category.id} value={category.id}>
                    {category.category_name}
                </option>
                ))}
            </select>
            <br/>
            <label>Item Title:</label>
            <input type='text' placeholder='Item Title' value={title} 
                    onChange = { e => _detectValueChanged('title', e.target.value) } />
            <br/>
            <label>Item Description:</label>
            <input type='text' placeholder='Item Description' value={description} 
                    onChange = { e => _detectValueChanged('description', e.target.value) } />
            <br/>
            <label>Item Price:</label>
            <input type='text' placeholder='Item Price' value={price} 
                    onChange = { e => _detectValueChanged('price', e.target.value) } />
            <br/>
            <label>Item Quantity:</label>
            <input type='text' placeholder='Quantity' value={quantity} 
                    onChange = { e => _detectValueChanged('quantity', e.target.value) } />
            <br/>
            <label>Item SKU:</label>
            <input type='text' placeholder='Item SKU' value={sku} 
                    onChange = { e => _detectValueChanged('sku', e.target.value) } />
                    <br/>
                    <Button clickme={ _update } title='Save Item' enabled={ buttonState }/>
                    <Button clickme={ _cancel} title='Cancel Edit' enabled={ buttonState }/>

        </div>
    )
}

export default EditItem