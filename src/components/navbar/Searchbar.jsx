import "./Searchbar.css"

export default function Searchbar() {
  return (
    <header className="p-4">
      <div className="searchbar bg-gray-800 w-full py-2 px-3 rounded-3xl flex flex-row justify-between items-center gap-3">
         <span className="material-symbols-outlined text-white">menu
        </span>
        <input type="text" placeholder="Search your notes" className="bg-transparent text-white w-3/5"/>
        <span className="material-symbols-outlined text-white"> grid_view
        </span>
        {/* <span class="material-symbols-outlined">splitscreen </span> */}
        <img src="src\assets\unnamed.png" className="rounded-3xl"/>
      </div>
    </header>
  )
}
