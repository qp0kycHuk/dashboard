import { observer } from "mobx-react-lite"
import { router } from "./app/router/router"
import { RouterProvider } from "@tanstack/react-router"
import { Provider } from "./Provider"
import { initRoutes } from "./app/router/routes"

initRoutes()

function AppComponent() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}

export const App = observer(AppComponent)
