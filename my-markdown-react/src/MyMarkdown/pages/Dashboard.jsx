import { DashboardLayout } from "../layout"
import { MdCreate, MdNavigateNext } from 'react-icons/all';
import { MarkdownList, SearchBar } from "../components";
import { Link } from "react-router-dom";
import groupImage from "../../assets/undraw_engineering_team_a7n2.svg";

export const Dashboard = () => {
  return (
    <DashboardLayout>

      <div className="mb-10 shadow">
        <SearchBar />
      </div>

      <div className="flex justify-between">

        <div>
          <h2 className="text-4xl text-indigo-500 font-bold">Welcome!</h2>
          <p className="text-gray-700">Create, edit, or view your markdowns.</p>
        </div>

        <button
          className="flex items-center gap-2 bg-purple-500 text-white text-xl rounded-md px-28 font-bold shadow"
        >Create <MdCreate /></button>

      </div>

      <div className="mt-5">

        <div className="bg-indigo-400 rounded-md shadow flex justify-between">
          
          <div className="w-72 p-5">
            <img src={ groupImage } alt="people"/>
          </div>

          <div className="p-3 flex flex-col justify-end flex-1">
            <div className="bg-indigo-500 p-3 rounded-md text-white">

              <h3 className="text-lg font-bold">Explore user's markdowns</h3>

              <div className="flex items-center justify-end gap-2 mt-2">
                <span className="text-gray-200">Explore</span>
                <Link
                  className="text-4xl bg-indigo-600 rounded-full"
                ><MdNavigateNext width='64em'/></Link>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-5">

          <div className="grid grid-cols-2 gap-3">

            <div className="bg-purple-500 flex flex-col justify-between rounded-md text-white p-10 space-y-5 shadow">

              <h3 className="text-xl">Markdowns created</h3>

              <div className="flex items-center justify-between gap-2">
                
                <span className="text-2xl font-bold">13</span>

                <div className="flex items-center gap-2">
                  <span className="text-gray-200">View</span>
                  <Link
                    className="text-4xl bg-purple-600 rounded-full"
                  ><MdNavigateNext width='64em'/></Link>
                </div>

              </div>

            </div>

            <div className="bg-indigo-500 flex flex-col justify-between rounded-md text-white p-10 shadow">

              <h3 className="text-xl">The last markdown edited</h3>
              <span className="block text-right text-2xl font-bold">Test text</span>

              <div className="flex items-center justify-end gap-2 mt-2">
                <span className="text-gray-200">View</span>
                <Link
                  className="text-4xl bg-indigo-600 rounded-full"
                ><MdNavigateNext width='64em'/></Link>
              </div>

            </div>

          </div>

          <div className="mt-5">

            <h2 className="text-xl font-bold text-gray-700 mb-5">Your lasts markdowns</h2>

            <MarkdownList array={[1,1,1]} />
            
          </div>

        </div>

      </div>
      

    </DashboardLayout>
  )
}
