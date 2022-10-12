import { useContext } from "react";
import { Brand } from "../../ui"
import { NavList } from "./";
import { IoMdClose } from "react-icons/all"
import { DashboardContext } from "../contexts";

export const SideNav = () => {

  const { sideNav, setSideNav } = useContext( DashboardContext );

  return (
    <aside className="min-h-screen py-10 px-5">

      <div className="mb-5 flex justify-between items-center">
        <Brand />
        <IoMdClose 
          size='2.3rem' 
          onClick={ () =>  setSideNav(!sideNav) }
          className='md:hidden'
        />
      </div>

      <NavList />

    </aside>
  )
}
