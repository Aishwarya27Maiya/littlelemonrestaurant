import Logo from "../images/icons_assets/Logo.svg"
function Header (){
    return (
        <header>
            <img
                src={Logo}
                alt="little lemon logo"
            />
        </header>
    );
}
export default Header;