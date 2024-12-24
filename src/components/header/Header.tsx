import Nav from "./Nav"

const Header = () => {

    return (
        <header className="h-[100px] border-b-[2.5px] border-line flex items-center w-full transition-all duration-[1s] sticky top-0 bg-extra2 ">
            <Nav />
        </header>
    )
}

export default Header;