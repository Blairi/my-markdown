import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/all"
import profilePlaceholder from '../../assets/profile-placeholder.png';
import { MenuContext } from "../contexts/dashboard";

export const UserBar = () => {

  const { sideNav, setSideNav } = useContext( MenuContext );
  
  return (
    <div className='flex bg-white items-center justify-between px-3 py-4'>

      <div className="flex items-center gap-5">
        <GiHamburgerMenu 
          size='2rem' 
          onClick={ () => setSideNav( !sideNav ) } 
          className='md:hidden'
        />
        <span className='font-bold'>Axel Montiel</span>
      </div>

      <div className='flex items-center gap-5'>

        <div>
          <button
            className='bg-red-500 hover:bg-red-800 transition text-white py-1 px-3 rounded-md'
          >Log out</button>
        </div>

        <div className="h-14 w-14">
          <img src={ profilePlaceholder } alt="profile placeholder" className='h-14 w-14 object-contain' />
        </div>
      </div>

    </div>
  )
}
