import { NavLink } from "react-router"
import { navigation } from "./config"
import { PirateIcon } from "@/shared/icons/fill"
import { cn } from "@/shared/utils/classnames"

export function Sidebar() {
  return (
    <div className="h-screen -my-layout py-layout self-start sticky top-0">
      <div className="bg-l3 w-80 py-6 pl-4 pr-6 h-full overflow-auto">
        <div className="flex items-center gap-3 mb-6">
          <PirateIcon className="text-2xl" />
          <div className="text-2xl font-bold">
            Dashboard
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          {navigation.map(({ name, icon: Icon, url }) => (
            <NavLink
              className={({ isActive }) => cn("btn btn-primary gap-4 justify-start px-2 -mx-2", isActive && "btn-fill")}
              key={name}
              to={url!}
            >
              <Icon /> {name}
            </NavLink>
          ))}
        </div>
        <div className="mt-6 text-sm opacity-60">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias architecto recusandae accusantium eius amet, voluptatem placeat neque itaque quas. Eius voluptatem repellendus est accusamus provident dignissimos, dolorum eligendi ipsam sint.
        </div>
      </div>
    </div>
  )
}