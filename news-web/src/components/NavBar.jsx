import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  let [open,setOpen]=useState(false);
  return (
   <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-lime-300 py-4 md:px-10 px-7 '>
      <div className='font-bold text-3xl cursor-pointer flex items-center font-[Poppins]'>
        <span>
       <i className="fa-brands fa-neos"></i> 
        </span>
        ewzVilla
      </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <i className={open ? "fa-solid fa-xmark":"fa-solid fa-bars"}></i>
      </div>
      <div className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static bg-lime-300 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in ${open?'top-20':'top-[-490px]'}`}>
  <Link to="/"> 
  <h1 className='cursor-pointer md:ml-8 text-xl hover:text-gray-600 duration-500 md:my-0 my-7'>
          Home 
        </h1>
         </Link>
        <Link to="/about">  
         <h1 className='cursor-pointer md:ml-8 text-xl hover:text-gray-600 duration-500 md:my-0 my-7'>
          About
        </h1>
        </Link>
        <Link to="/contact"> 
         <h1 className='cursor-pointer md:ml-8 text-xl hover:text-gray-600 duration-500 md:my-0 my-7'>
            Contact
        </h1>
        </Link> 

      </div>
    </div>
   </div>
  );
}

export default NavBar;