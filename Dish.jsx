import React from 'react'
import './header.css'


const Dish = ({product,togglePublished}) => {
 const handleToggle=async()=>{
  await 
  togglePublished(product.dishId);
 }
    
      return (
  <div>
    <div className='product'>
     <div className="img">
      <img src={product.imageUrl} alt ={product.imageUrl} />
     </div>
     <div className="details">
       <h3>{product.dishName}</h3>
      </div>
      <div className="info">
        <p>Publish Status : {product.isPublished ? 'Published': 'Not Published'} </p>
      </div>
      <div className="bt">
           <button onClick={handleToggle}>{product.isPublished ? 'Unpublish' : 'Publish'}</button>
      </div>
    </div>
    
    </div>
    
    
  )
}

export default Dish
