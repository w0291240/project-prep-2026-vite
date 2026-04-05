import './AddItem.scss'
import Button from '../Button/Button.jsx'
import { useState, useEffect } from 'react'

const AddItem = props => {

    //variables to mirror what is in each input field
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

    //add local copy of App/_addItem (define a new method)
    const _add = () => {
        props.onAddItem(item)
        _clear()
    }

    const _clear = () => {
        setCategoryID('')
        setTitle('')
        setDescription('')
        setPrice('')
        setQuantity('')
        setSku('')
    }

    useEffect(() => {
        console.log('entry changed')
        console.log(`entry: ${JSON.stringify(item)}`)

        setButtonState( (item.category_id === '' || item.title === "" || item.description === '' || item.price === '' || item.quantity === '' || item.sku === ''
        ) ? false : true ) 

    },[item])

    useEffect(() => {
        setItem({ 'category_id' : category_id, 'title': title, 'description': description, 'price': price, 'quantity': quantity, 'sku': sku})
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

    return(
        <div className='Form'>
            <Button clickme={ _add } title='Add Item' enabled={ buttonState }/>
            <br/>
            <label>Category ID:</label>
            <input type='text' placeholder='Category ID' value={category_id}
                   onChange = { e => _detectValueChanged('category_id', e.target.value) } />
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
        </div>
    )
}

export default AddItem