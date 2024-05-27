import { Outlet } from "react-router-dom"
import Header from "../component/common/Header"

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default MainLayout