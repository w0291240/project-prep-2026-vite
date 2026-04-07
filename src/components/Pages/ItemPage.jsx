import Banner from "../BannerComponent/Banner";
import TableItem from "../TableComponents/TableItem/TableItem";
import './ItemPage.scss'
import AddItem from "../FormComponents/AddItem/AddItem";
import EditItem from "../FormComponents/EditItem/EditItem";
import axios from "axios";
import { useState, useEffect } from "react";

const ItemPage = props => {

  //create a state variable to hold some data
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState({})
//   const [selectedCategory, setSelectedCategory] = useState({})

  useEffect(()=>{
    console.log(`App component has loaded`)

    //retrieve a list of all items from the server
    //use axios to retrieve (npm install axios)

    const url = "http://127.0.0.1:3001/items"
    axios.get(url)
         .then( response => {
            console.log(response) //{"items":[]}
            setItem(response.data.items)

         })
         .catch( error => {
            console.log(error);
        })

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
  setSelectedItem({})
}
 

  const _addItem = item => {



    const url = "http://127.0.0.1:3001/items"
    axios.post(url, { 
      item : item
    })
    .then( response => {
      setItem(response.data.items)
    })
    .catch( error => {
          console.log(error);
      })

  }

  const _editItem = item => {
    console.log(`_editItem fired`)
    console.log(item)

    //show the edit component
    setEditing(true)
    setSelectedItem(item)
  }

  const _updateItem = item => {
    console.log(`_updateItem fired`)
   console.log(item)

    const url = `http://127.0.0.1:3001/items/${item.id}`
    axios.patch(url, {
      item: item
    }).then( response => {
      setItem(response.data.items)
      setEditing(false)
      setSelectedItem({})
    }).catch( error => {
        console.log(error);
    })

  }

  const _deleteItem = item => {
    console.log(`_deleteItem fired`)
    console.log(item)

    const url = `http://127.0.0.1:3001/items/${item.id}`
    axios.delete(url).then( response => {
      setItem(response.data.items)
    }).catch( error => {
        console.log(error);
    })
  }

  
return (

 <div className='App'>
      <Banner title='Items'/>
{
  editing ? (
    <EditItem onUpdateItem={_updateItem} item={selectedItem} onCancelEdit={_cancelEdit} categories={category} /> ) : ( <AddItem onAddItem={_addItem} categories={category} /> )
}
      <TableItem items={item} onEditItem={ _editItem } onDeleteItem={ _deleteItem } />
    </div>
  );

}

export default ItemPage;