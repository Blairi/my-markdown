import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { DashboardContext } from "../contexts";

export const NavListItem = ({ path, navIcon, text }) => {

  const { sideNav, setSideNav } = useContext( DashboardContext );

  const { pathname } = useLocation();

  return (
    <NavLink to={ path } onClick={ () => setSideNav( !sideNav ) }>
      <div
        className={`flex items-center gap-3 rounded-md py-2 px-3 hover:bg-indigo-800 hover:text-white transition 
        ${pathname === path ? 'bg-indigo-500 text-white' : 'text-indigo-500'}`}
      >
        { navIcon }
        { text }
      </div>
    </NavLink>
  )
}
