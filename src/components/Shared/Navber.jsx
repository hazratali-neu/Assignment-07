import React from 'react';
import keen from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
const Navber = () => {
    return (
        <div className='bg-[#FFFFFF] border-b border-gray-300'>
           <nav className='w-11/12 mx-auto flex justify-between py-6'>
             <img src={keen} alt="" />
             <ul className='flex gap-5'>
                <li ><NavLink className='flex items-center gap-1'><BiHomeAlt2 /> Home</NavLink></li>
                <li ><NavLink className='flex items-center gap-1'><RiTimeLine /> Timeline</NavLink></li>
                <li ><NavLink className='flex items-center gap-1'><ImStatsDots /> Stats</NavLink></li>
             </ul>

           </nav>

        </div>
    );
};

export default Navber;