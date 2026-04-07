import { useEffect, useState } from 'react'
import './Grid.scss'
import axios from 'axios'

const Grid = props => {

    const [storefrontItems, setStorefrontItems] = useState([])

    useEffect(() => {

    const url = "http://127.0.0.1:3001/storefront"
    axios.get(url)
         .then( response => {
            console.log(response)
            setStorefrontItems(response.data.storefront)

         })
         .catch( error => {
            console.log(error);
         })
        },[])
    
    return (
    <div className='container'>
      {storefrontItems.map(item => (
        <div key={item.id} className='card'>
          <h3>{item.title}</h3>
          <p><strong>Category:</strong> {item.category}</p>
          <p>{item.description}</p>
          <p><strong>Price:</strong> ${item.price}</p>
        </div>
      ))}
    </div>
    );
}

export default Grid