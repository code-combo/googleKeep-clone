import "./Searchbar.css"

export default function Searchbar() {
  return (
    <header className="p-4 bg-teal-800">
      <div className="searchbar bg-gray-800 w-full py-2 px-3 rounded-3xl flex flex-row justify-between gap-3">
         <span className="material-symbols-outlined text-white">menu
        </span>
        <input type="text" placeholder="Search your notes" className="bg-white text-white w-20"/>
        <span className="material-symbols-outlined text-white"> grid_view
        </span>
        {/* <span class="material-symbols-outlined">splitscreen </span> */}
        <img src="src\assets\unnamed.png" className="rounded-3xl"/>
      </div>
    </header>
  )
}
