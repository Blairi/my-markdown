import { useContext } from "react";
import { SideNav, UserBar } from "../components"
import { DashboardContext } from "../contexts/dashboard"

export const DashboardLayout = ({ children }) => {

  const { sideNav } = useContext( DashboardContext );

  return (
    <div className='grid h-screen overflow-hidden md:grid-cols-[1fr_5fr]'>

      <div className={`bg-white shadow-xl md:shadow-none z-10 ${sideNav ? 'fixed min-w-[70vw] md:min-w-fit md:w-auto md:static' : 'hidden md:block'}`}>
        <SideNav />
      </div>

      <div className="bg-gray-100 overflow-y-scroll">

        <UserBar />

        <main className="w-[90%] sm:w-[95%] max-w-[1280px] py-10 mx-auto">
          { children }
        </main>

      </div>

    </div>
  )
}
