import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Logo from './Logo'
import "./Main.css"
 const Mainpage = () => {
  return (
    <div>
      <header className='header'>
        <div className='image'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMR-CfnLNP4-O-4onfipUUQIGA8fwxHJC1OQ&usqp=CAU' alt='logo'/>
        </div>
        <div>
        <Link to='/home'><button className='btn'>Home</ button></Link> 
        <Link to='/Menu'><button className='btn'>Menu</ button></Link>
        <Link to='/contact'><button className='btn'>Contact</ button></Link>
        </div>
       </header>
      <div className='mainpage'>
      <Logo/>
      </div>
      
    </div>
    
  )
}

export default Mainpage