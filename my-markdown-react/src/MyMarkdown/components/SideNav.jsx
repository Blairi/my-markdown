import { Brand } from "../../ui"
import { NavList } from "./";

export const SideNav = () => {
  return (
    <aside className="min-h-screen py-10 px-5">


      <div className="mb-5">
        <Brand />
      </div>

      <NavList />



    </aside>
  )
}
