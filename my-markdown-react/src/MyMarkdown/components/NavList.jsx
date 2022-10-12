import { Link } from "react-router-dom"

import { AiFillSignal } from "react-icons/ai";

export const NavList = () => {
  return (
    <nav>
      
      <Link to='/dashboard'>
        <div className="flex items-center gap-3 rounded-md py-2 px-3 bg-indigo-500 text-white">
          <AiFillSignal />
          Overview
        </div>
      </Link>

    </nav>
  )
}
