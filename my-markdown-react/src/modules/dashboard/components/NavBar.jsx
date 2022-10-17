import { useState } from "react";
import { NavItem } from "./";
import { GiHamburgerMenu, IoMdClose, MdSpaceDashboard, BsMarkdown, IoCreate } from "react-icons/all"
import { Brand } from "../../../ui/Brand"
import profilePlaceholder from '../../../assets/profile-placeholder.png';

export const NavBar = () => {

  const [ showNav, setShowNav ] = useState(false);

  return (
    <div className="shadow-md bg-white">

      <div className="w-[90%] sm:w-[95%] max-w-[1280px] mx-auto">
        <div className='flex items-center justify-between py-2 md:py-5'>

          <div className='flex items-center gap-5'>
            <button
              type='button'
              onClick={ () => setShowNav( !showNav ) }
            ><GiHamburgerMenu size='2rem' /></button>
            <span className='font-bold text-indigo-500 md:text-lg'>Axel Montiel</span>
          </div>

          <div className='h-10 w-10 md:h-12 md:w-12 bg-white'>
            <img src={ profilePlaceholder } alt="profile placeholder" className='h-10 w-10 md:h-12 md:w-12 object-contain' />
          </div>

        </div>
      </div>

      <nav className={`bg-white h-full w-[80vw] md:max-w-[30vh] top-0 px-3 py-5 z-10 shadow-lg ${ showNav ? 'fixed' : 'hidden' }`}>

        <div className="mb-5 flex justify-between items-center">

          <Brand />

          <button
            onClick={ () => setShowNav( !showNav ) }
          >
            <IoMdClose size='2.3rem' />
          </button>

        </div>

        <div className='mt-2 flex flex-col gap-5'>

          <NavItem 
            icon={ <MdSpaceDashboard /> }
            path='/dashboard'
            text='Dashboard'
          />

          <NavItem 
            icon={ <BsMarkdown /> }
            path='/dashboard/markdowns'
            text='My markdowns'
          />

          <NavItem 
            icon={ <IoCreate /> }
            path='/dashboard/markdowns/create'
            text='Create markdown'
          />

          <button
            className='bg-red-500 hover:bg-red-800 transition text-white py-1 px-3 rounded-md w-full mt-10'
          >Log out</button>

        </div>

      </nav>

    </div>
  )
}
