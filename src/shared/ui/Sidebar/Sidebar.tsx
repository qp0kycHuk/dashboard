import { Link } from "react-router"
import { navigation } from "./config"

export function Sidebar() {
  return (
    <div className="bg-l3 w-80 p-3">
      {navigation.map(({ name, icon: Icon, url }) => (
        <Link to={url!} className="btn btn-primary gap-4 w-full justify-start" key={name}>
          <Icon /> {name}
        </Link>
      ))}
    </div>
  )
}