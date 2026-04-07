import './EditCategory.scss'
import Button from '../Button/Button.jsx'
import { useState, useEffect } from 'react'

const EditCategory = props => {

    const _update = () => {
        props.onUpdateCategory(category)
        _clear()
    }

    //variables to mirror what is in each input field
    const [id, setCategoryID] = useState('')
    const [category_name, setCategoryName] = useState('')

    const [category, setCategory] = useState({})

    const [buttonState, setButtonState] = useState(false)

    const _clear = () => {
        setCategoryID('')
        setCategoryName('')
    }

    useEffect(() => {
        setButtonState(category_name.trim() !== '')
    }, [category_name])

    useEffect(() => {
        setCategory({ id, category_name })
    }, [id, category_name])

    const _detectValueChanged = (key, value) => {
        if (key === 'category_name') {
            setCategoryName(value)
        } 
        console.log('_detectValueChanged triggered')
    }

    useEffect(() => {
        setCategoryID(props.category.id)
        setCategoryName(props.category.category_name)

    },[props])//[] should be fine, [props] guarantees values received

    return(
        <div className='EditCategory'>
            <Button clickme={ _update } title='Edit Category' enabled={ buttonState }/>
            <br/>
            <label>Category Name:</label>
            <input type='text' placeholder='Category Name' value={category_name}
                   onChange = { e => _detectValueChanged('category_name', e.target.value) } />
        </div>
    )
}

export default EditCategory