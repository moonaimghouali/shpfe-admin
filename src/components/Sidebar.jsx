import React from 'react'
import logo from "../assets/imgs/logo-primary.png";
import {AiOutlineUser} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import { links } from "../data/sideBarData"

const Sidebar = () => {
  return (
    <div className='relative flex flex-col items-center bg-white h-screen w-40 drop-shadow-md px-3 py-5 '>
        {/* Header */}
            <div className='flex flex-col items-center'>
                <img className="w-10" src={logo} alt='Sonatrach' />
                <p className='font-meduim mt-1'>Sonatrach</p>
                <p className='font-semibold mt-3'>Administration</p>
            </div>

        {/* Divider */}
        <div className='h-px w-40 bg-slate-100 mt-5'></div>

        {/* Menu */}
        <div className='mt-5 w-40'>
            {links.map( (item) => (
                <div key={item.name} >
                     <NavLink className="flex flex-row items-center px-3 py-2 rounded-sm hover:bg-orange-100"
                     to={item.path}
                     key={item.name}>

                        {item.icon}
                        <span className="capitalize ml-2 font-semibold">{item.name}</span>
                     </NavLink>
                </div>
            ))}
        </div>

        {/* Divider */}
        <div className='h-px w-40 bg-slate-100 mt-5'></div>

        {/* Footer */}
        <div className='absolute bottom-6 flex flex-col items-center'>
            <div className='flex flex-row items-center'>
              {/* <AiOutlineUser className='text-xl'/> */}
              <p className='capitalize ml-2 font-semibold'>john Doe</p>  
            </div>
            <button className="text-2xl mt-2" onClick={"asas"}>
             <BiLogOut color='#333333'/>
            </button>
        </div>

    </div>
   
  )
}

export default Sidebar;