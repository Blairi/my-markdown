import { SideNav, UserBar } from "../components"

export const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[1fr_5fr] h-screen overflow-hidden">

      <div>
        <SideNav />
      </div>

      <div className="bg-gray-100 overflow-y-scroll">

        <UserBar />

        <main className="w-[95%] max-w-[1280px] py-10 mx-auto">
          { children }
        </main>

      </div>

    </div>
  )
}
