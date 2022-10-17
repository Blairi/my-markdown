import { NavLink, useLocation } from "react-router-dom"

export const NavItem = ({ text, icon, path }) => {

  const { pathname } = useLocation();

  return (
    <NavLink to={ path }>
      <div
        className={`flex items-center gap-3 rounded-md py-2 px-3 hover:bg-indigo-800 hover:text-white transition 
                  ${pathname === path ? 'bg-indigo-500 text-white' : 'text-indigo-500'}` }
      >
        { icon }
        { text }
      </div>
    </NavLink>
  )
}
