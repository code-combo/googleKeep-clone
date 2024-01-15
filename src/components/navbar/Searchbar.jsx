import "./Searchbar.css"

export default function Searchbar() {
  return (
    <header className="p-4">
      <div className="searchbar bg-gray-800 w-full py-2 px-3 rounded-3xl flex justify-between gap-3">
        {/* <img src="../src/assets/menu.svg" alt="" className="inline-block"/> */}
        <svg className="w-7 text-white" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        <input type="text" placeholder="Search your notes" className="bg-transparent text-white"/>
        <img src="../src/assets/splitscreen.svg" alt="" className="inline-block"/>
        <img class="rounded-3xl" src="https://lh3.google.com/u/0/ogw/ANLem4bSCjaZWPdIvbtnFZ52Miw1H4wnpo0SKKBZrSVc=s32-c-mo" />
      </div>
    </header>
  )
}
