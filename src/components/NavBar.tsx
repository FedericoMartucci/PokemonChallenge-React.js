import Filter from "./Filter";
import Logo from "./Logo"
import ToogleBar from "./ToogleBar";

function NavBar (props: any) {
    const handleSearch = (value: string) => {
        props.handleValueSearched(value);
    }
    return (
        <nav>
            <div className="nav-bar">
                <Filter></Filter>
                <ToogleBar handleSearch={handleSearch}></ToogleBar>
                <Logo></Logo>
            </div>
        </nav>
    );
}

export default NavBar;