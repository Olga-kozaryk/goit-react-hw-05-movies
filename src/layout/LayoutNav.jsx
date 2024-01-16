import Header from "components/Header/Header"
import { Outlet } from "react-router-dom"


const LayoutNav = () => {
  return (
<div>
    <Header />
    <Outlet/>
</div>
  )
}

export default LayoutNav