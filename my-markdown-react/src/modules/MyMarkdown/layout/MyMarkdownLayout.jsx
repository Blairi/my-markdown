import { NavBar } from "../components/NavBar"

export const MyMarkdownLayout = ({ children }) => {
  return (
    <div className="bg-gray-200">

      <div className="fixed z-10 w-full">
        <NavBar />
      </div>

      <main className="grid items-center min-h-screen pb-20 pt-32">

        <div className="w-[90%] md:w-[80%] max-w-[1280px] mx-auto shadow-md rounded-md overflow-hidden bg-white">  
          { children }
        </div>

      </main>

    </div>
  )
}
