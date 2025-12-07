import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'
import Dahsboard from './Pages/Dashboard/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dahsboard />
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
