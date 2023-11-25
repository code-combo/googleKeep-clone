import { Link } from 'react-router-dom'

export default function Sidenav() {
  return (
    <>
      <nav className="sidenav">
        <ul>
          <li>
            <Link to = "/">Notes</Link>
            <Link to = "reminders">Reminders</Link>
            <Link to = "/archive">Archives</Link>
            <Link to = "/trash">Trash</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
