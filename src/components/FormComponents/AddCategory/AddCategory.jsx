import './AddCategory.scss'
import Button from '../Button/Button.jsx'
import { useState, useEffect } from 'react'

const AddCategory = props => {

    //variables to mirror what is in each input field
    const [category_name, setCategoryName] = useState('')

    //variable to update with all 3 values with the end goal
    //of passing that new collection back up to App, where we will
    //append it to entries
    const [category, setCategory] = useState({})
    const [buttonState, setButtonState] = useState(false)

    //add local copy of App/_addEntry (define a new method)
    const _add = () => {
        props.onAddCategory(category)
        _clear()
    }

    const _clear = () => {
        setCategoryName('')
    }

    useEffect(() => {
        console.log('category changed')
        console.log(`category: ${JSON.stringify(category)}`)
        setButtonState(category_name.trim() !== '') 
    },[category])

    useEffect(() => {
        setCategory({ 'category_name' : category_name})
    },[category_name])

    const _detectValueChanged = (key, value) => {
        if (key === 'category_name') {
            setCategoryName(value)
        }
        console.log('_detectValueChanged triggered')
    }

    return(
        <div className='Form'>
            <Button clickme={ _add } title='Add category' enabled={ buttonState }/>
            <br/>
            <label>Category Name:</label>
            <input type='text' placeholder='category_name' value={category_name}
                   onChange = { e => _detectValueChanged('category_name', e.target.value) } />

        </div>
    )
}

export default AddCategory