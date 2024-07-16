import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div>
   <div className='navbar'>
    <div className="logo">Vk FOODS</div>
    <ul>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/cart'}>Cart</Link>
        </li>
    </ul> </div>
    
   
   </div>
  )
}

export default Header
