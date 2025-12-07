import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App
