import { NavBar } from "../components"

export const DashboardLayout = ({ children }) => {

  return (
    <div className='min-h-screen bg-gray-100'>

      <NavBar />

      <main className="w-[90%] sm:w-[95%] max-w-[1280px] py-10 mx-auto">
        { children }
      </main>

    </div>
  )
}
