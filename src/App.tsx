import { observer } from "mobx-react-lite"
import { router } from "./app/router/router"
import { RouterProvider } from "@tanstack/react-router"

function AppComponent() {
  return (
    <RouterProvider router={router} />
  )
}

export const App = observer(AppComponent)
