import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import keyboardLights from "../../../assets/keyboard-lights.jpg";
import dashboardSs from "../../../assets/dashboard_ss.png";
import mock from "../../../assets/mock.png";

export const HomePage = () => {
  return (
    <div className="bg-gray-200 pb-20">

      <div className="fixed z-10 w-full">
        <NavBar />
      </div>

      <div 
        className="min-h-screen grid items-center"
        style={{ 
        background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url(${keyboardLights})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-[90%] md:w-[80%] max-w-[1280px] mx-auto space-y-10">

          <div>
            <h1 className='text-3xl md:text-6xl text-white border-b-4 border-indigo-500 inline-block'>My<span className='font-bold'>Markdown</span></h1>
          </div>

          <div>
            <Link
              to='/auth/register'
              className="bg-indigo-500 hover:bg-indigo-800 transition p-3 rounded-md text-white text-lg"
            >Get started</Link>
          </div>

        </div>
      </div>

      <div className="w-[90%] md:w-[80%] max-w-[1280px] mx-auto">

        <section className="flex flex-col justify-center md:grid md:items-center md:grid-cols-[1fr_3fr] gap-5 min-h-screen">
          <div>
            <h2 className="font-bold text-xl inline-block border-b-4 border-indigo-500">Edit, create and share your Markdowns!</h2>
            <p className="text-lg">You have access to your dashboard, where you can view, search and create any text that you want.</p>
          </div>
          <div className="shadow-md">
            <img src={ dashboardSs } alt="dashboard screenshot"  className="w-full"/>
          </div>
        </section>

      </div>

      <div className="bg-white py-10 min-h-screen grid items-center">

        <section className="w-[90%] md:w-[80%] max-w-[1280px] mx-auto">

          <div className="mb-10">
            <h2 className="font-bold text-2xl md:text-5xl inline-block text-purple-500">You have access any time in your phone or desktop!</h2>
          </div>

          <img src={ mock } alt="dashboard screenshot"  className="h-full"/>

        </section>

      </div>

    </div>
  )
}
