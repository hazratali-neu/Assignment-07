import React from 'react';
import keen from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';

const Navber = () => {
    return (
        <div className='bg-[#FFFFFF] border-b border-gray-300'>
           <nav className='w-11/12 mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6'>
             <img className='w-28' src={keen} alt="" />

             <ul className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                <li className='text-[#64748B]'>
                    <NavLink className='flex items-center gap-1'>
                        <BiHomeAlt2 /> Home
                    </NavLink>
                </li>

                <li className='text-[#64748B]'>
                    <NavLink className='flex items-center gap-1'>
                        <RiTimeLine /> Timeline
                    </NavLink>
                </li>

                <li className='text-[#64748B]'>
                    <NavLink className='flex items-center gap-1'>
                        <ImStatsDots /> Stats
                    </NavLink>
                </li>
             </ul>

           </nav>
        </div>
    );
};

export default Navber;