import { useState } from "react"
import { DashboardContext } from "."

export const DashboardProvider = ({ children }) => {

  const [sideNav, setSideNav] = useState(false);

  return (
    <DashboardContext.Provider value={{ sideNav, setSideNav }} >
      { children }
    </DashboardContext.Provider>
  )
}
