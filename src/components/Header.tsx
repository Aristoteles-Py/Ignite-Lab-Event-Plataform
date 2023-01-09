import { Barbell } from "phosphor-react";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";


function Header () {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    console.log(sidebar)
    return(
        <header className="w-full py-5 flex justify-center items-center bg-gray-900 border-b border-gray-600 max-md:justify-around">
            <Logo/>
            <div className="flex gap-2 hidden max-md:flex">
                <p>Aulas</p>
                <button onClick={showSidebar}>
                </button>
            </div>
        </header>
    )
}
export default Header;