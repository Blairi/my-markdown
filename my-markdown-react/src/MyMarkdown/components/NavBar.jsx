import { useState } from "react";
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu, IoMdClose, AiFillSignal } from "react-icons/all"
import { Brand } from "../../ui/Brand"
import profilePlaceholder from '../../assets/profile-placeholder.png';

export const NavBar = () => {

  const [ showNav, setShowNav ] = useState(false);

  return (
    <div>

      <div className='flex items-center justify-between py-2 px-3 md:p-5 shadow-lg'>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={ () => setShowNav( !showNav ) }
          ><GiHamburgerMenu size='1.5rem' /></button>
          <span className='font-bold text-indigo-500 md:text-lg'>Axel Montiel</span>
        </div>

        <div className='h-10 w-10 md:h-12 md:w-12'>
          <img src={ profilePlaceholder } alt="profile placeholder" className='h-10 w-10 md:h-12 md:w-12 object-contain' />
        </div>

      </div>

      <nav className={`bg-white h-full w-[80vw] md:max-w-[30vh] top-0 px-3 py-5 z-10 shadow-lg ${ showNav ? 'fixed' : 'hidden' }`}>

        <div className="mb-5 flex justify-between items-center">
          <Brand />
          <IoMdClose 
            size='2.3rem' 
            onClick={ () => setShowNav( !showNav ) }
          />
        </div>

        <div className='mt-2 space-y-5'>

          <NavLink to='/dashboard' >
            <div
              className={`flex items-center gap-3 rounded-md py-2 px-3 hover:bg-indigo-800 hover:text-white transition 
              ${'' === '' ? 'bg-indigo-500 text-white' : 'text-indigo-500'}`}
            >
              <AiFillSignal />
              Dashboard
            </div>
          </NavLink>

          <div>
            <button
              className='bg-red-500 hover:bg-red-800 transition text-white py-1 px-3 rounded-md w-full mt-10'
            >Log out</button>
          </div>

        </div>

      </nav>
    </div>
  )
}
