import { Barbell, Hamburger, List, SidebarSimple, X } from "phosphor-react";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";


function Header () {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const chamarMenu = sidebar && true ? "top-0" : "max-md:-mt-[1000px]";
    return(
        <header className="w-full py-5 flex justify-center items-center bg-gray-900 border-b border-gray-600 max-md:justify-start">
            <span className="max-md:ml-4">
                <Logo/>
            </span>
            <div className="absolute hidden flex w-full justify-end z-10 gap-1 pr-4 max-md:flex">
                <span className="mt-1">
                    Aulas
                </span>
                <button onClick={showSidebar}>
                    {sidebar ? <X size={30}/> : <List size={30}/>}
                </button>
            </div>
            {sidebar ? <Sidebar hidden="md:hidden z-0 " active={chamarMenu}/> : null}
        </header>
    )
}
export default Header;