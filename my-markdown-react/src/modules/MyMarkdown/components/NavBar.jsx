import { useState } from "react";
import { GiHamburgerMenu, IoMdClose, MdSpaceDashboard, MdOutlineExplore } from "react-icons/all"  
import { NavItem } from "../../../components"
import { Brand } from "../../../ui"

export const NavBar = () => {

  const [ showMenu, setShowMenu ] = useState(false);

  return (

    <nav className="bg-white py-3 shadow-md z-10">

      <div className="w-[90%] max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="flex gap-2 w-full md:w-auto">

          <button onClick={ () => setShowMenu( !showMenu ) } className='md:hidden'>
            {
              showMenu ? <IoMdClose size='1.5rem'/> : <GiHamburgerMenu size='1.5rem'/>
            }
          </button>

          <Brand />

        </div>

        <div className={`${ showMenu ? 'flex' : 'hidden md:flex' } flex-col-reverse md:flex-row md:items-center gap-5 py-5 md:py-0 w-full md:w-auto`}>

          <NavItem 
            path='/dashboard'
            text='Dashboard'
            icon={ <MdSpaceDashboard /> }
          />

          <NavItem 
            path='/explore'
            text='Explore'
            icon={ <MdOutlineExplore /> }
          />

          <span className="text-purple-500 hover:text-purple-800 transition font-bold">Axel Montiel</span>

        </div>


      </div>

    </nav>
    
  )
}
