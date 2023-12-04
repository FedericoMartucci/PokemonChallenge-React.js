import PokedexLogo from "../logo.png"
function Logo () {
    return (
        <a href="/">
            <img id="logo" src={PokedexLogo} alt="logo"/>
        </a>
    );
}

export default Logo;