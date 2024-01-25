import { useState } from "react"
import { CSSTransition } from "react-transition-group"

import "./Searchbar.css"

export default function Searchbar() {

  const [ isEnter, setIsEnter ] = useState(false);

  return (
    <header className="p-4">
      <div className="searchbar bg-gray-800 w-full py-3 px-3 rounded-full flex flex-row justify-center items-center gap-3 overflow-hidden">
        <span className="material-symbols-outlined text-white">menu</span>
        <input type="text" placeholder="Search your notes" className=" text-white bg-transparent"/>
        <CSSTransition>
          <span className="material-symbols-outlined text-white">splitscreen</span>
          {/* <span class="material-symbols-outlined">splitscreen </span> */}
          <img src="src\assets\unnamed.png" className="rounded-3xl"/>
        </CSSTransition>
      </div>
    </header>
  )
}
