import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// Styles
import './App.css'

// Page components
import RootLayout from "./layouts/RootLayout"
import Notes from "../src/pages/notes/Notes"
import Reminders from "../src/pages/reminders/Reminders"
import Archive from "../src/pages/archive/Archive"
import Trash from "../src/pages/trash/Trash"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<RootLayout/>}>
        <Route index element = {<Notes/>}/>
        {/* <Route path = ""> */}
          <Route path = "reminders" element = {<Reminders/>}/>
          <Route path = "archive" element = {<Archive/>}/>
          <Route path = "trash" element = {<Trash/>}/>
        {/* </Route> */}
      </Route>
    )
  )

  return (
    <RouterProvider router = {router}/>
  )
}

export default App