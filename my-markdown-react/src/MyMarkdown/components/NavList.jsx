import { NavListItem } from "./NavListItem";

import { AiFillSignal } from "react-icons/ai";
import { BsMarkdown } from 'react-icons/all';

export const NavList = () => {
  return (
    <nav className="flex flex-col gap-5">

      <NavListItem 
        path='/dashboard'
        navIcon={ <AiFillSignal /> }
        text='Dashboard'
      />

      <NavListItem 
        path='/dashboard/markdowns'
        navIcon={ <BsMarkdown /> }
        text='Markdowns'
      />

    </nav>
  )
}
