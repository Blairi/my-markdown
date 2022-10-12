import { useState } from "react"
import { MenuContext } from "./"

export const MenuProvider = ({ children }) => {

  const [sideNav, setSideNav] = useState(false);

  return (
    <MenuContext.Provider value={{ sideNav, setSideNav }} >
      { children }
    </MenuContext.Provider>
  )
}
