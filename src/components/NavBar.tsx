import Filter from "./Filter";
import Logo from "./Logo"
import ToogleBar from "./ToogleBar";
function NavBar () {
    return (
        <div className="nav-bar">
            <Filter></Filter>
            <ToogleBar></ToogleBar>
            <Logo></Logo>
        </div>
    );
}

export default NavBar;