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
    <div className='storefront-grid'>
      {storefrontItems.map(item => (
        <article key={item.id} className='storefront-card'>
          <h3 className='storefront-card__title'>{item.title}</h3>
          <p className='storefront-card__category'><strong>Category:</strong> {item.category}</p>
          <p className='storefront-card__description'>{item.description}</p>
          <p className='storefront-card__price'><strong>Price:</strong> ${item.price}</p>
        </article>
      ))}

      {storefrontItems.length === 0 && (
        <p className='storefront-grid__empty'>No storefront items available yet.</p>
      )}
    </div>
    );
}

export default Grid