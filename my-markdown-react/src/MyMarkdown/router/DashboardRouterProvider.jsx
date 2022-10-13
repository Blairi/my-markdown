import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import { DashboardContext } from "../contexts"
import { Dashboard, UserMarkdowns } from "../pages";

export const DashboardRouterProvider = ({ children }) => {

  const [sideNav, setSideNav] = useState(false);

  return (
    <DashboardContext.Provider value={{ sideNav, setSideNav }} >

      <Routes>

        <Route path="" element={ <Dashboard /> }/>
        <Route path="markdowns" element={ <UserMarkdowns /> }/>
        
      </Routes>

      { children }
      
    </DashboardContext.Provider>
  )
}
