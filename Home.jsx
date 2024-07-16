import React, { useEffect, useState } from 'react'
import data from "../assets/products.json"
import Dish from './Dish';
import axios from 'axios'
import './home.css'
const Home = () => {
    const [products,setProducts]= useState([data]);

    useEffect(()=>{
      const fetchDishes=async()=>{
        try{
          const response=await
          axios.get('http://localhost:5000/api/dishes');
          setProducts(response.data);
        }catch(error){
              console.log("error fetching dishes :" ,error);
        }
      }
       fetchDishes();
    },[]);
    const togglePublished=async(id) =>{
    try{
      await axios.put(`http://localhost:5000/api/dishes/toggles/${id}`);

      //update
      setProducts(prevProducts => prevProducts.map(
        product => product.dishId ===id? {...product,isPublished : !product.isPublished}:product));
        console.log(`Successfully Toggled publish status dish with id ${id}`);
}  catch(error){
        console.log(`Error Toggling publish status dish with id ${id}`);
}
    }
  return (
    <>
    <div className='product-container'>
  {products.map((product)=>(
     <Dish key={product.dishId} product={product} togglePublished={togglePublished}  />
))}
    
    </div>
    </>
  )
}

export default Home
