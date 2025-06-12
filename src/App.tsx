import { RouterProvider } from "react-router"
import { router } from "./app/router/router"
import { Provider } from "./Provider"

function AppComponent() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}

export const App = AppComponent
