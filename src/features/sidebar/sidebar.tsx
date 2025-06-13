import { NavLink } from "react-router"
import { PirateIcon } from "@/shared/icons/fill"
import { cn } from "@/shared/utils/classnames"
import { navigation } from "./config"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"
import { sidebarStore } from "./sidebar-store"
import { observer } from "mobx-react-lite"

import s from "./sidebar.module.scss"

export const Sidebar = observer(() => {
  return (
    <div className={cn(s.root, sidebarStore.opened && s.opened)}>
      <div className="flex items-center gap-3 mb-6">
        <PirateIcon className="text-2xl shrink-0" />

        <div
          className={cn(
            "text-2xl leading-0 font-bold transition",
            !sidebarStore.opened && "opacity-0"
          )}
        >
          Dashboard
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        {navigation.map(({ name, icon: Icon, url }) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                "btn btn-primary gap-4 justify-start px-2 -mx-2",
                isActive && "btn-fill"
              )
            }
            key={name}
            to={url!}
          >
            <Icon />
            <span
              className={cn("transition", !sidebarStore.opened && "opacity-0")}
            >
              {name}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="mt-auto"></div>
      <div
        className={cn(
          "w-full overflow-hidden mt-6 transition",
          !sidebarStore.opened && "opacity-0"
        )}
      >
        <div className="text-xs opacity-60 w-56">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          architecto recusandae accusantium eius amet, voluptatem placeat neque
          itaque quas. Eius voluptatem repellendus est accusamus provident
          dignissimos, dolorum eligendi ipsam sint.
        </div>
      </div>
      <button
        className="btn btn-primary gap-4 justify-start px-2 -mx-2 mt-6"
        onClick={sidebarStore.toggle}
      >
        <DoubleArrowIcon
          className={cn("transition", sidebarStore.opened && "-rotate-180")}
        />
        {sidebarStore.opened && (
          <span
            className={cn("transition", !sidebarStore.opened && "opacity-0")}
          >
            Свернуть
          </span>
        )}
      </button>
    </div>
  )
})
