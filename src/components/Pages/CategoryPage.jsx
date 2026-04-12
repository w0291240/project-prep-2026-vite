import EditCategory from "../FormComponents/EditCategory/EditCategory";
import TableCategory from "../TableComponents/TableCategory/TableCategory";
import axios from "axios";
import AddCategory from "../FormComponents/AddCategory/AddCategory";
import { useEffect, useState } from "react";
import Banner from "../BannerComponent/Banner";
import './CategoryPage.scss'


const CategoryPage = props => {

  //create a state variable to hold some data
  const [category, setCategory] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({})

  useEffect(()=>{
    console.log(`category component has loaded`)

    //retrieve a list of all items from the server
    //use axios to retrieve (npm install axios)

        const categoryUrl = "http://127.0.0.1:3001/categories"
        axios.get(categoryUrl)
          .then(response => {
            setCategory(response.data.categories)
          })
          .catch(error => {
            console.log(error);
          })


  },[])

  
const _cancelEdit = () => {
  setEditing(false)
  setSelectedCategory({})
}
 

  const _addCategory = category => {



    const url = "http://127.0.0.1:3001/categories"
    axios.post(url, { 
      category : category
    })
    .then( response => {
      setCategory(response.data.categories)
    })
    .catch( error => {
          console.log(error);
      })

  }

  const _editCategory = category => {
    console.log(`_editCategory fired`)
    console.log(category)

    //show the edit component
    setEditing(true)
    setSelectedCategory(category)
  }

  const _updateCategory = category => {
    console.log(`_updateCategory fired`)
   console.log(category)

    const url = `http://127.0.0.1:3001/categories/${category.id}`
    axios.patch(url, {
      category: category
    }).then( response => {
      setCategory(response.data.categories)
      setEditing(false)
      setSelectedCategory({})
    }).catch( error => {
        console.log(error);
    })

  }

  const _deleteCategory = category => {
    console.log(`_deleteCategory fired`)
    console.log(category)

    const url = `http://127.0.0.1:3001/categories/${category.id}`
    axios.delete(url).then( response => {
      setCategory(response.data.categories)
    }).catch( error => {
        console.log(error);
    })
  }

  return(
      <div className='category-page'>
<Banner title='Categories'/>
{
  editing ? (
    <EditCategory onUpdateCategory={_updateCategory} category={selectedCategory} onCancelEdit={_cancelEdit} categories={category} /> ) : ( <AddCategory onAddCategory={_addCategory} categories={category} /> )
}
      <TableCategory categories={category} onEditCategory={ _editCategory } onDeleteCategory={ _deleteCategory } />
    </div>
    );
  
  }
  
  export default CategoryPage;