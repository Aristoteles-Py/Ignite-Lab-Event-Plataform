import Logo from "./Logo";

function Header () {
    return(
        <header className="w-full py-5 flex justify-center items-center bg-gray-900 border-b border-gray-600">
            <Logo/>
        </header>
    )
}
export default Header;