import React from 'react';
//import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import '../styles/main.css';

function Header(){

    return(
  <nav className = "Header" >
     <img src= {Logo} className='Logo'/>
     
      
  </nav>

    );
}
export default Header;