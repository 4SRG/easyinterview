import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => { 
    
    return (
        <div className='items-center navbar flex w-[100%] px-[10%] xl:px-[15%]  mx-auto justify-between h-[60px] bg-black text-yellow-200'>
            <NavLink to="/" className=' text-center font-bold text-[1.5rem] '>Redux Store</NavLink>
            <ul className='flex h-[100%]'>
                <NavLink className="hover:bg-yellow-200 w-[80px] text-center hover:text-black transition-all duration-[0.3s] pt-4" to="/">Home</NavLink>
                <NavLink className="hover:bg-yellow-200 w-[80px] text-center hover:text-black transition-all duration-[0.3s] pt-4"  to="/cart">Cart</NavLink>
            </ul>
        </div>
    )
}


export default Navbar
