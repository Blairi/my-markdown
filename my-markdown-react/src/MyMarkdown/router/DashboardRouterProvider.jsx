import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import { DashboardContext } from "../contexts"
import { Dashboard } from "../pages";

export const DashboardRouterProvider = ({ children }) => {

  const [sideNav, setSideNav] = useState(false);

  return (
    <DashboardContext.Provider value={{ sideNav, setSideNav }} >

      <Routes>

        <Route path="" element={ <Dashboard /> }/>
        
      </Routes>

      { children }
      
    </DashboardContext.Provider>
  )
}