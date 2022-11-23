import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return(
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
         <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-3">
          <Link className="button" to=''>Log In</Link>
          <Link className="button" to=''>Sign Up</Link>
        </div>
      </div>
   </header>
  )
};

export default Header;

//hover:text-violet-900 transition
