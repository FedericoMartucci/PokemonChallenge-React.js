import Filter from "./Filter";
import Logo from "./Logo"
import ToogleBar from "./ToogleBar";
function NavBar () {
    return (
        <nav>
            <div className="nav-bar">
                <Filter></Filter>
                <ToogleBar></ToogleBar>
                <Logo></Logo>
            </div>
        </nav>
    );
}

export default NavBar;